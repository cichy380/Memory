import { AppState } from '../../../core/app-store/app-store.state'
import { createSelector } from '@ngrx/store'
import { GameState } from './game.state'

export const selectGame = (state: AppState) => state.game

export const selectGameDeck = createSelector(
  selectGame,
  (stateGame: GameState) => stateGame.deck,
)

export const selectGameFlipped = createSelector(
  selectGame,
  (stateGame: GameState) => stateGame.flipped,
)

export const selectGameJustFlippedCardIdx = createSelector(
  selectGame,
  (stateGame: GameState) => stateGame.justFlippedIdx,
)

export const selectGameRound = createSelector(
  selectGame,
  (stateGame: GameState) => stateGame.round,
)
