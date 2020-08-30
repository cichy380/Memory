import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-pie-timer',
  templateUrl: './pie-timer.component.html',
  styleUrls: ['./pie-timer.component.scss'],
})
export class PieTimerComponent {
  @Input() time: number // ms
}
