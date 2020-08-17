import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { gameReducer } from '../../features/game/store/game.reducer'
import { sharedReducer } from '../../shared/store/shared.reducer'


export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  game: gameReducer,
}
