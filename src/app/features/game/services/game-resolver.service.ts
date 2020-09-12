import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router'
import { Store } from '@ngrx/store'
import { GameState } from '../store/game.state'
import { initGame } from '../store/game.actions'


@Injectable()
export class GameResolverService implements Resolve<void> {

  constructor(private store: Store<GameState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(initGame())
  }
}
