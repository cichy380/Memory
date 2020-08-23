import { createReducer, on } from '@ngrx/store'
import { GameState, initialGameState } from './game.state'
import { flipGameCardSuccess, readDeckSuccess, updateDeckSuccess } from './game.actions'


export const gameReducer = createReducer(
  initialGameState,
  on(readDeckSuccess, (state, {deck, round}) => ({...state, deck, round})),
  on(updateDeckSuccess, (state, {deck, round, justFlippedIdx}) => ({...state, deck, round, justFlippedIdx})),
  on(flipGameCardSuccess, (state: GameState, {cardIndex, round, justFlippedIdx}) => ({
    ...state,
    round,
    justFlippedIdx,
    deck: state.deck.map((card, index) => {
      if (index === cardIndex && !card.isFlipped) {
        return {...card, isFlipped: true}
      } else {
        return card
      }
    }),
  })),
)
