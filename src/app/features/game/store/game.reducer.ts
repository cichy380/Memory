import { createReducer, on } from '@ngrx/store'
import { GameState, initialGameState } from './game.state'
import { flipCardSuccess, initGameSuccess, nextMoveSuccess } from './game.actions'


export const gameReducer = createReducer(
  initialGameState,
  on(initGameSuccess, (state, {move, deck, flipped}) => (
    {...state, move, deck, flipped}
  )),
  on(nextMoveSuccess, (state, {move, flipped, justFlippedIdx}) => (
    {...state, move, flipped, justFlippedIdx}
  )),
  on(flipCardSuccess, (state: GameState, {move, justFlippedIdx, flipped, matched}) => (
    {...state, move, justFlippedIdx, flipped, matched}
  )),
)
