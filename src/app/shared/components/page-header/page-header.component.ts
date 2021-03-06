import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Router } from '@angular/router'


@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderComponent {
  constructor(private router: Router) {
  }

  public onNavBtnClick(url: string) {
    this.router.navigateByUrl(url)
  }
}
