import { Component, Input } from '@angular/core'


@Component({
  selector: 'app-game-heading',
  templateUrl: './game-heading.component.html',
  styleUrls: ['./game-heading.component.scss'],
})
export class GameHeadingComponent {
  public justMatched: boolean
  private innerMatched: number

  @Input()
  set matched(matchedCardNumber) {
    this.innerMatched = matchedCardNumber
    this.justMatched = true
    setTimeout(() =>this.justMatched = false, 1000)
  }
  get matched() {
    return this.innerMatched
  }
  @Input() move: number
  @Input() cards: number
}
