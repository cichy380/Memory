import { Card } from '../components/card/card.model'

export interface GameState {
  deck: Card[]
  justFlippedIdx: number[]
  round: number
}

export const initialGameState: GameState = {
  deck: [],
  justFlippedIdx: [],
  round: 0,
}
