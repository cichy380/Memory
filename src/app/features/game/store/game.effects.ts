import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import {
  flipCard,
  flipCardFail,
  flipCardSuccess,
  initGame,
  initGameFail,
  initGameSuccess,
  nextMove,
  nextMoveSuccess,
  nextMoveFail,
} from './game.actions'
import { GameService } from '../services/game.service'
import { ResponseModel } from '../../../shared/models/response-model.model'


@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private service: GameService) {
  }

  loadDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initGame),
      mergeMap(() => this.service.initGame().pipe(
        map((response: ResponseModel) => ({
          move: response.data.move,
          deck: response.data.deck,
          flipped: response.data.flipped,
          type: initGameSuccess.type,
        })),
        catchError(() => of({type: initGameFail.type})),
      )),
    ),
  )

  updateDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(nextMove),
      mergeMap(() => this.service.newMove().pipe(
        map((response: ResponseModel) => ({
          move: response.data.move,
          flipped: response.data.flipped,
          justFlippedIdx: response.data.justFlippedIdx,
          type: nextMoveSuccess.type,
        })),
        catchError(() => of({type: nextMoveFail.type})),
      )),
    ),
  )

  flipCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flipCard),
      mergeMap(({cardIndex}) => this.service.flipCard(cardIndex).pipe(
        map((response: ResponseModel) => ({
          move: response.data.move,
          flipped: response.data.flipped,
          matched: response.data.matched,
          justFlippedIdx: response.data.justFlippedIdx,
          type: flipCardSuccess.type,
        })),
        catchError(() => of({type: flipCardFail.type})),
      )),
    ),
  )
}
