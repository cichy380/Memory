import { Injectable } from '@angular/core'
import { Card, CardSuits, CardColors } from './components/card/card.model'

@Injectable()
export class GameService {
  private readonly cardNumber = 12

  public getDeck() {
    const shuffledSuits = this.shuffle(this.getAllAvailableSuit())
    const shuffledColors = this.shuffle(this.getAllAvailableColors())
    const deck = []

    for(let i = 0; i < (this.cardNumber / 2); i+=1) {
      deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
      deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
    }

    return this.shuffle(deck)
  }

  private getAllAvailableSuit() {
    return Object.keys(CardSuits).map(key => CardSuits[key]).filter(value => typeof value === 'string') as string[]
  }

  private getAllAvailableColors() {
    return Object.keys(CardColors).map(key => CardColors[key]).filter(value => typeof value === 'string') as string[]
  }

  private shuffle(arr: Array<any>) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }
}
