import { AppState } from '../../../core/app-store/app-store.state'
import { createSelector } from '@ngrx/store'
import { GameState } from './game.state'

export const selectGame = (state: AppState) => state.game

export const selectGameDeck = createSelector(
  selectGame,
  (stateGame: GameState) => stateGame.deck,
)
