import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { GameComponent } from './game.component'
import { GameResolverService } from './services/game-resolver.service'

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    resolve: [GameResolverService],
    runGuardsAndResolvers: 'always',
  },
  {
    path: 'new',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {
}
