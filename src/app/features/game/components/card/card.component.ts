import { Component, Input } from '@angular/core'
import { Card } from './card.model'
import { SoundService } from '../../services/sound.service'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  public isDisabled: boolean
  public isFlipped: boolean
  public isMatched: boolean

  @Input() card: Card
  @Input()
  set disabled(value: boolean) {
    this.isDisabled = value
  }
  @Input()
  set flipped(value: boolean) {
    if (this.isFlipped !== undefined) {
      this.sound.play('card.wav')
    }
    this.isFlipped = value
  }
  @Input()
  set matched(value: boolean) {
    this.isMatched = value
  }

  constructor(private sound: SoundService) {
  }
}
