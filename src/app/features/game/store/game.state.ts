import { Card } from '../components/card/card.model'

export interface GameState {
  deck: Card[]
}

export const initialGameState: GameState = {
  deck: [],
}
