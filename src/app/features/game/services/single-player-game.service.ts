import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Card, CardSuits, CardColors } from '../components/card/card.model'
import { ResponseModel } from '../../../shared/models/response-model.model'

const CARD_NUMBER = 12


@Injectable({
  providedIn: 'root',
})
export class SinglePlayerGameService {
  private move: number
  private deck: Card[]
  private flipped: boolean[]
  private matched: boolean[]
  private justFlippedIdx: number[] = []

  public initGame(): Observable<ResponseModel> {
    const shuffledSuits = shuffle(this.getAllAvailableSuit())
    const shuffledColors = shuffle(this.getAllAvailableColors())

    this.move = 1
    this.deck = []
    this.flipped = Array(CARD_NUMBER).fill(false)
    this.matched = Array(CARD_NUMBER).fill(false)

    for(let i = 0; i < (CARD_NUMBER / 2); i+=1) {
      this.deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
      this.deck.push(new Card(shuffledSuits[i], shuffledColors[i]))
    }

    this.deck = shuffle(this.deck)

    return this.createResponse('move', 'deck', 'flipped', 'matched')
  }

  public flipCard(index: number): Observable<ResponseModel> {
    if (this.flipped[index] === false && this.justFlippedIdx.length < 2) {
      this.flipped[index] = true
      this.justFlippedIdx.push(index)

      if (this.justFlippedIdx.length === 2 && this.compareJustFlippedCards()) {
        this.setJustFlippedAsMatched()
      }
    }

    return this.createResponse('move', 'flipped', 'matched', 'justFlippedIdx')
  }

  public newMove(): Observable<ResponseModel> {
    if (this.matched.some(i => !i)) {
      this.move += 1

      if (this.compareJustFlippedCards() === false) {
        this.flipBackUnmatchedCards()
      }
    } else {
      // TODO: Error response if next-move is impossible
    }
    this.justFlippedIdx = []

    return this.createResponse('move', 'flipped', 'justFlippedIdx')
  }

  private compareJustFlippedCards(): boolean {
    const firstFlippedCard: Card = this.deck[this.justFlippedIdx[0]]
    const secondFlippedCard: Card = this.deck[this.justFlippedIdx[1]]
    return firstFlippedCard.color === secondFlippedCard.color && firstFlippedCard.suit === secondFlippedCard.suit
  }

  private setJustFlippedAsMatched(): void {
    this.justFlippedIdx.forEach(cardIdx => this.matched[cardIdx] = true)
  }

  private flipBackUnmatchedCards(): void {
    this.justFlippedIdx.forEach(cardIdx => this.flipped[cardIdx] = false)
  }

  private createResponse(...props): Observable<any> {
    const response = {}
    props.forEach(propName => response[propName] = clone(this[propName]))
    return of({data: response})
  }

  private getAllAvailableSuit() {
    return Object.keys(CardSuits).map(key => CardSuits[key]).filter(value => typeof value === 'string') as string[]
  }

  private getAllAvailableColors() {
    return Object.keys(CardColors).map(key => CardColors[key]).filter(value => typeof value === 'string') as string[]
  }
}

function shuffle(arr: Array<any>) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function clone(input) {
  return typeof input === 'object' ? JSON.parse(JSON.stringify(input)) : input
}
