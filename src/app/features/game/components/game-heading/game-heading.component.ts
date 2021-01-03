import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core'


@Component({
  selector: 'app-game-heading',
  templateUrl: './game-heading.component.html',
  styleUrls: ['./game-heading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameHeadingComponent implements OnChanges {
  public justMatched: boolean

  @Input() matched: number
  @Input() move: number
  @Input() cards: number

  constructor(private changeDetector: ChangeDetectorRef) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.matched && changes.matched.firstChange === false) {
      this.justMatched = true
      setTimeout(() => {
        this.justMatched = false
        this.changeDetector.detectChanges()
      }, 1000)
    }
  }
}
