import { createReducer, on } from '@ngrx/store'
import { GameState, initialGameState } from './game.state'
import { flipGameCardSuccess, readDeckSuccess } from './game.actions'


export const gameReducer = createReducer(
  initialGameState,
  on(readDeckSuccess, (state, {deck}) => ({...state, deck})),
  on(flipGameCardSuccess, (state: GameState, {cardIndex}) => ({
    ...state,
    deck: state.deck.map((card, index) => {
      if (index === cardIndex && !card.isFlipped) {
        return {...card, isFlipped: true}
      } else {
        return card
      }
    }),
  })),
)
