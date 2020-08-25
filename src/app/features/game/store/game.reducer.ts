import { createReducer, on } from '@ngrx/store'
import { GameState, initialGameState } from './game.state'
import { flipGameCardSuccess, readDeckSuccess, updateDeckSuccess } from './game.actions'


export const gameReducer = createReducer(
  initialGameState,
  on(readDeckSuccess, (state, {round, deck, flipped}) => ({...state, deck, round, flipped})),
  on(updateDeckSuccess, (state, {round, flipped, justFlippedIdx}) => ({...state, round, flipped, justFlippedIdx})),
  on(flipGameCardSuccess, (state: GameState, {round, flipped, justFlippedIdx}) => ({...state, round, justFlippedIdx, flipped})),
)
