import { Card } from '../components/card/card.model'

export interface GameState {
  move: number
  deck: Card[]
  flipped: boolean[],
  matched: boolean[],
  justFlippedIdx: number[]
}

export const initialGameState: GameState = {
  move: 0,
  deck: [],
  flipped: [],
  matched: [],
  justFlippedIdx: [],
}
