import { Card } from '../../features/game/components/card/card.model'

export interface ResponseModel {
  data: {
    deck?: Card[],
    round: number,
    justFlippedIdx?: number[],
    // match?: boolean,
  }
  message?: string
}
