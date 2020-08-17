import { createReducer, on } from '@ngrx/store'
import { initialGameState } from './game.state'
import { readDeckSuccess } from './game.actions'

export const gameReducer = createReducer(
  initialGameState,
  on(readDeckSuccess, (state, {deck}) => ({...state, deck})),
)
