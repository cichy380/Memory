import { Component, Input } from '@angular/core'
import { CardColors, CardSuits } from './card.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  suit: CardSuits

  @Input()
  color: CardColors

  @Input()
  isFlipped: boolean
}
