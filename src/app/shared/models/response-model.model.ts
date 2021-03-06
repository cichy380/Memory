import { Card } from '../../features/game/components/card/card.model'

export interface ResponseModel {
  data: {
    deck?: Card[],
    flipped?: boolean[],
    matched?: boolean[],
    move: number,
    justFlippedIdx?: number[],
  }
  message?: string
}
