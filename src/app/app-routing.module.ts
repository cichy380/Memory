import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { StartComponent } from './pages/start/start.component'
import { GameComponent } from './game/game.component'

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent },
  { path: 'game', component: GameComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
