import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'
import { select, Store } from '@ngrx/store'
import { Card } from './components/card/card.model'
import { AppState } from '../../core/app-store/app-store.state'
import { flipCard, initGame, nextMove } from './store/game.actions'
import {
  selectGameDeck,
  selectGameFlipped,
  selectGameJustFlippedCardIdx,
  selectGameMatched,
  selectGameMove,
  arraysEqual,
} from './store/game.selectors'
import { NotificationBarService } from '../../shared/services/notification-bar.service'

const MOVE_DELAY = 2000 // ms


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  public columns: number
  public move$: Observable<number>
  public deck$: Observable<Card[]>
  public flipped$: Observable<boolean[]>
  public matched$: Observable<boolean[]>
  public matchedPairs: number
  public flippingDisabled: boolean
  public gameOver: boolean
  private justFlippedCardIdx$: Observable<number[]>
  private subscription: Subscription
  private delayTimeout

  constructor(private store: Store<AppState>, private notification: NotificationBarService) {
    this.columns = GameComponent.getColumns(window.innerWidth)
    this.subscription = new Subscription()
    this.flippingDisabled = false
    store.dispatch(initGame())

    this.deck$ = store.pipe(select(selectGameDeck))
    this.flipped$ = store.pipe(select(selectGameFlipped), distinctUntilChanged((p, n) => arraysEqual(p, n)))
    this.matched$ = store.pipe(select(selectGameMatched), distinctUntilChanged((p, n) => arraysEqual(p, n)))
    this.move$ = store.pipe(select(selectGameMove))
    this.justFlippedCardIdx$ = store.pipe(select(selectGameJustFlippedCardIdx))
  }

  static getColumns(deviceWidth: number) {
    let columnNumber: number

    if (deviceWidth >= 992) {
      columnNumber = 6
    } else if (deviceWidth >= 768) {
      columnNumber = 4
    } else {
      columnNumber = 3
    }

    return columnNumber
  }

  public onClickCard(cardIndex: number, cardFlipped: boolean) {
    if (cardFlipped === false && this.flippingDisabled === false) {
      this.store.dispatch(flipCard({cardIndex}))
    }
  }

  ngOnInit(): void {
    this.subscription.add(
      this.justFlippedCardIdx$.subscribe(justFlippedCardIdx => {
        if (justFlippedCardIdx.length === 2) {
          this.flippingDisabled = true
          this.delayTimeout = setTimeout(() => this.store.dispatch(nextMove()), MOVE_DELAY)
        } else {
          this.flippingDisabled = false
        }
      }),
    )
    this.subscription.add(
      this.matched$.subscribe(matched => {
        this.matchedPairs = (matched.filter(i => i).length / 2)
        if (matched.every(i => i)) {
          setTimeout(() => this.notification.showSuccess('All pairs matched!', 2600), 550)
        } else if (this.delayTimeout) {
          setTimeout(() => {
            clearTimeout(this.delayTimeout)
            this.store.dispatch(nextMove())
          }, 500)
        }
      }),
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public onResize(event) {
    this.columns = GameComponent.getColumns(event.target.innerWidth)
  }
}
