import { Component, OnInit } from '@angular/core'
import { GameService } from './game.service'
import { Card } from './components/card/card.model'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public columns: number
  public deck: Card[]

  constructor(private service: GameService) {
    this.deck = service.getNewDeck()
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

  public onClickCard(card: Card) {
    card.isFlipped = true
  }

  ngOnInit(): void {
    this.columns = GameComponent.getColumns(window.innerWidth)
  }

  public onResize(event) {
    this.columns = GameComponent.getColumns(event.target.innerWidth)
  }
}
