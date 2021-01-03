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

  @Input() card: Card
  @Input()
  set disabled(value: boolean) {
    this.isDisabled = value
  }
  @Input()
  set flipped(value: boolean) {
    this.isFlipped = value
    if (value === true) {
      this.sound.play('card.wav')
    }
  }

  constructor(private sound: SoundService) {
  }
}
