import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { RouterHistoryService } from '../../services/router-history.service'


@Component({
  selector: 'app-page-header-back',
  templateUrl: './page-header-back.component.html',
  styleUrls: ['./page-header-back.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderBackComponent {
  @Input() link: string
  @Input() ariaLabel: string

  constructor(private router: Router, private routerHistory: RouterHistoryService) {
  }

  onBackClick() {
    if (this.link === '/') {
      this.router.navigateByUrl('/')
    } else {
      this.router.navigateByUrl(this.routerHistory.getLatestFrom(this.link) || this.link)
    }
  }
}
