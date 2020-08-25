import { Card } from '../components/card/card.model'

export interface GameState {
  deck: Card[]
  flipped: boolean[],
  justFlippedIdx: number[]
  round: number
}

export const initialGameState: GameState = {
  deck: [],
  flipped: [],
  justFlippedIdx: [],
  round: 0,
}
