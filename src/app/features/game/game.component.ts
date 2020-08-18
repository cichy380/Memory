import { Component, OnInit } from '@angular/core'
import { Card } from './components/card/card.model'
import { select, Store } from '@ngrx/store'
import { AppState } from '../../core/app-store/app-store.state'
import { flipGameCard, readDeck } from './store/game.actions'
import { selectGameDeck } from './store/game.selectors'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public columns: number
  public deck$: Observable<Card[]>

  constructor(private store: Store<AppState>) {
    store.dispatch(readDeck())
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
    if (card.isFlipped === false) {
      this.store.dispatch(flipGameCard({cardIndex}))
    }
  }

  ngOnInit(): void {
    this.columns = GameComponent.getColumns(window.innerWidth)
    this.deck$ = this.store.pipe(select(selectGameDeck))
  }

  public onResize(event) {
    this.columns = GameComponent.getColumns(event.target.innerWidth)
  }
}
