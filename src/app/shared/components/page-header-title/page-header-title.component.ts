import { ChangeDetectionStrategy, Component, Input } from '@angular/core'


@Component({
  selector: 'app-page-header-title',
  templateUrl: './page-header-title.component.html',
  styleUrls: ['./page-header-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderTitleComponent {
  @Input() addons: string | number
}
