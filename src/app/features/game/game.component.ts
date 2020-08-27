import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { Card } from './components/card/card.model'
import { AppState } from '../../core/app-store/app-store.state'
import { flipGameCard, readDeck, updateDeck } from './store/game.actions'
import { selectGameDeck, selectGameFlipped, selectGameJustFlippedCardIdx, selectGameMatched, selectGameRound } from './store/game.selectors'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  public columns: number
  public deck$: Observable<Card[]>
  public flipped$: Observable<boolean[]>
  public matched$: Observable<boolean[]>
  public matchedPairs: number
  public round$: Observable<number>
  private justFlippedCardIdx$: Observable<number[]>
  private justFlippedCardIdx: number[]
  private subscription: Subscription

  constructor(private store: Store<AppState>) {
    this.subscription = new Subscription()
    store.dispatch(readDeck())

    this.deck$ = store.pipe(select(selectGameDeck))
    this.flipped$ = store.pipe(select(selectGameFlipped))
    this.matched$ = store.pipe(select(selectGameMatched))
    this.round$ = store.pipe(select(selectGameRound))
    this.justFlippedCardIdx$ = store.pipe(select(selectGameJustFlippedCardIdx))
    this.justFlippedCardIdx = []
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
    if (cardFlipped === false && this.justFlippedCardIdx.length < 2) {
      this.store.dispatch(flipGameCard({cardIndex}))
    }
  }

  ngOnInit(): void {
    this.columns = GameComponent.getColumns(window.innerWidth)

    this.subscription.add(
      this.justFlippedCardIdx$.subscribe(justFlippedCardIdx => {
        this.justFlippedCardIdx = justFlippedCardIdx
        if (justFlippedCardIdx.length === 2) {
          setTimeout(() => this.store.dispatch(updateDeck()), 2000)
        }
      }),
    )

    this.subscription.add(
      this.matched$.subscribe(matched => {
        this.matchedPairs = (matched.filter(item => item).length / 2)
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
