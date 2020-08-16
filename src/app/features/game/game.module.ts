import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { GameRoutingModule } from './game-routing.module'

import { GameComponent } from './game.component'
import { CardComponent } from './components/card/card.component'
import { GameService } from './game.service'


@NgModule({
  declarations: [
    GameComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GameRoutingModule,
  ],providers: [
    GameService,
  ],
})
export class GameModule {
}
