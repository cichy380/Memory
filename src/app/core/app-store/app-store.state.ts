import { SharedState } from '../../shared/store/shared.state'
import { GameState } from '../../features/game/store/game.state'


export interface AppState {
  shared: SharedState
  game: GameState
}
