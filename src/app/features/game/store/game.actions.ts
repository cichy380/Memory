import { createAction, props } from '@ngrx/store'
import { Card } from '../components/card/card.model'


export const initGame = createAction('[game] Initialize Game')
export const initGameSuccess = createAction('[game] Initialize Game Success',
  props<{ move: number, deck: Card[], flipped: boolean[], matched: boolean[] }>())
export const initGameFail = createAction('[game] Initialize Game FAIL')

export const nextMove = createAction('[game] Next Move')
export const nextMoveSuccess = createAction('[game] Next Move Success',
  props<{ move: number, flipped: boolean[], justFlippedIdx: number[] }>())
export const nextMoveFail = createAction('[game] Next Move FAIL')

export const flipCard = createAction('[game] Flip Card', props<{ cardIndex: number }>())
export const flipCardSuccess = createAction('[game] Flip Card Success',
  props<{ move: number, justFlippedIdx: number[], flipped: boolean[], matched: boolean[] }>())
export const flipCardFail = createAction('[game] Flip Card FAIL')
