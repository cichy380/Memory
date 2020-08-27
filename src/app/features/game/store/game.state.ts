import { Card } from '../components/card/card.model'

export interface GameState {
  deck: Card[]
  flipped: boolean[],
  matched: boolean[],
  justFlippedIdx: number[]
  round: number
}

export const initialGameState: GameState = {
  deck: [],
  flipped: [],
  matched: [],
  justFlippedIdx: [],
  round: 0,
}
