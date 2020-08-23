import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { Card } from './components/card/card.model'
import { AppState } from '../../core/app-store/app-store.state'
import { flipGameCard, readDeck, updateDeck } from './store/game.actions'
import { selectGameDeck, selectGameJustFlippedCardIdx } from './store/game.selectors'


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  public columns: number
  public deck$: Observable<Card[]>
  private justFlippedCardIdx$: Observable<number[]>
  private justFlippedCardIdx: number[]
  private subscription: Subscription

  constructor(private store: Store<AppState>) {
    store.dispatch(readDeck())

    this.deck$ = this.store.pipe(select(selectGameDeck))
    this.justFlippedCardIdx$ = this.store.pipe(select(selectGameJustFlippedCardIdx))
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

  public onClickCard(card: Card, cardIndex: number) {
    if (card.isFlipped === false && this.justFlippedCardIdx.length < 2) {
      this.store.dispatch(flipGameCard({cardIndex}))
    }
  }

  ngOnInit(): void {
    this.columns = GameComponent.getColumns(window.innerWidth)

    this.subscription = this.justFlippedCardIdx$.subscribe(justFlippedCardIdx => {
      this.justFlippedCardIdx = justFlippedCardIdx
      if (justFlippedCardIdx.length === 2) {
        setTimeout(() => this.store.dispatch(updateDeck()), 2000)
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public onResize(event) {
    this.columns = GameComponent.getColumns(event.target.innerWidth)
  }
}
