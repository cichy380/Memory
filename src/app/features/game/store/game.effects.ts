import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import {
  flipGameCard,
  flipGameCardFail,
  flipGameCardSuccess,
  readDeck,
  readDeckFail,
  readDeckSuccess,
  updateDeck,
  updateDeckSuccess,
  updateDeckFail,
} from './game.actions'
import { GameService } from '../services/game.service'
import { ResponseModel } from '../../../shared/models/response-model.model'


@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private service: GameService) {
  }

  loadDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readDeck),
      mergeMap(() => this.service.fetchDeck().pipe(
        map((response: ResponseModel) => ({
          round: response.data.round,
          deck: response.data.deck,
          flipped: response.data.flipped,
          type: readDeckSuccess.type,
        })),
        catchError(() => of({type: readDeckFail.type})),
      )),
    ),
  )

  updateDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateDeck),
      mergeMap(() => this.service.update().pipe(
        map((response: ResponseModel) => ({
          round: response.data.round,
          flipped: response.data.flipped,
          justFlippedIdx: response.data.justFlippedIdx,
          type: updateDeckSuccess.type,
        })),
        catchError(() => of({type: updateDeckFail.type})),
      )),
    ),
  )

  flipCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flipGameCard),
      mergeMap(({cardIndex}) => this.service.flipCard(cardIndex).pipe(
        map((response: ResponseModel) => ({
          round: response.data.round,
          flipped: response.data.flipped,
          justFlippedIdx: response.data.justFlippedIdx,
          type: flipGameCardSuccess.type,
        })),
        catchError(() => of({type: flipGameCardFail.type})),
      )),
    ),
  )
}
