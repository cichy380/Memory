import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Card, CardSuits, CardColors } from '../components/card/card.model'
import { ResponseModel } from '../../../shared/models/response-model.model'


@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly cardNumber = 12
  private deck: Card[] = []
  private round = 1
  private justFlippedIdx: number[] = []

  public fetchDeck(): Observable<ResponseModel> {
    const shuffledSuits = this.shuffle(this.getAllAvailableSuit())
    const shuffledColors = this.shuffle(this.getAllAvailableColors())

    for(let i = 0; i < (this.cardNumber / 2); i+=1) {
      this.deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
      this.deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
    }

    this.deck = this.shuffle(this.deck)
    return of({data: {deck: this.clone(this.deck), round: this.round}})
  }

  public flipCard(index: number): Observable<ResponseModel> {
    let match = false

    if (this.deck[index].isFlipped === false && this.justFlippedIdx.length < 2) {
      this.deck[index].isFlipped = true
      this.justFlippedIdx.push(index)

      if (this.justFlippedIdx.length === 2) {
        match = this.compareJustFlippedCards()
      }
    }

    return of({data: {match, round: this.round, justFlippedIdx: this.clone(this.justFlippedIdx)}})
  }

  public update(): Observable<ResponseModel> {
    const match = this.compareJustFlippedCards()
    this.round += 1

    if (match) {
      this.justFlippedIdx = []
    } else {
      this.flipBackUnmatchedCards()
    }

    return of({data: {round: this.round, justFlippedIdx: this.clone(this.justFlippedIdx), deck: this.clone(this.deck)}})
  }

  private getAllAvailableSuit() {
    return Object.keys(CardSuits).map(key => CardSuits[key]).filter(value => typeof value === 'string') as string[]
  }

  private getAllAvailableColors() {
    return Object.keys(CardColors).map(key => CardColors[key]).filter(value => typeof value === 'string') as string[]
  }

  private compareJustFlippedCards(): boolean {
    const firstFlippedCard: Card = this.deck[this.justFlippedIdx[0]]
    const secondFlippedCard: Card = this.deck[this.justFlippedIdx[1]]
    return firstFlippedCard.color === secondFlippedCard.color && firstFlippedCard.suit === secondFlippedCard.suit
  }

  private flipBackUnmatchedCards(): void {
    let cardIdx: number

    do {
      cardIdx = this.justFlippedIdx.pop()
      this.deck[cardIdx].isFlipped = false
    }
    while(this.justFlippedIdx.length)
  }

  private shuffle(arr: Array<any>) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  private clone(obj: object) {
    return JSON.parse(JSON.stringify(obj))
  }
}
