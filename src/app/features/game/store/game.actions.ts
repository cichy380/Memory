import { createAction, props } from '@ngrx/store'
import { Card } from '../components/card/card.model'


export const readDeck = createAction('[game] Read Deck (Cards)')
export const readDeckSuccess = createAction('[game] Read Deck (Cards) Success',
  props<{ round: number, deck: Card[] }>())
export const readDeckFail = createAction('[game] Read Deck (Cards) FAIL')

export const updateDeck = createAction('[game] Update Deck')
export const updateDeckSuccess = createAction('[game] Update Deck Success',
  props<{ round: number, deck: Card[], justFlippedIdx: number[] }>())
export const updateDeckFail = createAction('[game] Update Deck FAIL')

export const flipGameCard = createAction('[game] Flip Card', props<{ cardIndex: number }>())
export const flipGameCardSuccess = createAction('[game] Flip Card Success',
  props<{ round: number, cardIndex: number, justFlippedIdx: number[] }>())
export const flipGameCardFail = createAction('[game] Flip Card FAIL')
