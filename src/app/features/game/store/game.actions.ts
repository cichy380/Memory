import { createAction, props } from '@ngrx/store'
import { Card } from '../components/card/card.model'


export const readDeck = createAction('[game] Read Deck (Cards)')
export const readDeckSuccess = createAction('[game] Read Deck (Cards) Success', props<{ deck: Card[] }>())
export const readDeckFail = createAction('[game] Read Deck (Cards) FAIL')
