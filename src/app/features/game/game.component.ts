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
import { listAnimation } from './animations/list.animation'
import { playSound } from '../../shared/services/play-sound.function'

const MOVE_DELAY = 3000 // ms


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [listAnimation],
})
export class GameComponent implements OnInit, OnDestroy {
  public columns: number
  public move$: Observable<number>
  public deck$: Observable<Card[]>
  public flipped$: Observable<boolean[]>
  public flipped: boolean[]
  public matched$: Observable<boolean[]>
  public matched: boolean[]
  public matchedPairs: number
  public flippingDisabled: boolean
  public moveDelay = MOVE_DELAY // ms
  public timeForRemember: boolean
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
    this.move$ = store.pipe(select(selectGameMove), distinctUntilChanged())
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

  public onClickCard(cardIndex: number) {
    if (this.flipped[cardIndex] === false && this.flippingDisabled === false) {
      this.store.dispatch(flipCard({cardIndex}))
    }
  }

  ngOnInit(): void {
    this.subscription.add(
      this.justFlippedCardIdx$.subscribe(justFlippedCardIdx => {
        if (justFlippedCardIdx.length === 2) {
          this.flippingDisabled = true
          this.timeForRemember = true
          this.delayTimeout = setTimeout(() => {
            this.store.dispatch(nextMove())
            this.timeForRemember = false
          }, MOVE_DELAY)
        } else {
          this.flippingDisabled = false
        }
      }),
    )
    this.subscription.add(
      this.flipped$.subscribe(flipped => {
        if (this.flipped !== undefined) {
          playSound('card.wav')
        }
        this.flipped = flipped
      }),
    )
    this.subscription.add(
      this.matched$.subscribe(matched => {
        if (this.matched !== undefined) {
          setTimeout(() => playSound('success.flac'), 333)
        }
        this.matched = matched
        this.matchedPairs = (matched.filter(i => i).length / 2)

        if (matched.every(i => i)) {
          setTimeout(() => {
            playSound('win.wav')
            this.notification.showSuccess('All pairs matched!', 2600)
          }, 600)
        } else if (this.delayTimeout) {
          this.timeForRemember = false
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