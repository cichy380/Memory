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
import { SinglePlayerGameService } from '../services/single-player-game.service'
import { ResponseModel } from '../../../shared/models/response-model.model'


@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private service: SinglePlayerGameService) {
  }

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(initGame),
      mergeMap(() => this.service.initGame().pipe(
        map((response: ResponseModel) => ({
          move: response.data.move,
          deck: response.data.deck,
          flipped: response.data.flipped,
          matched: response.data.matched,
          justFlippedIdx: response.data.justFlippedIdx,
          type: initGameSuccess.type,
        })),
        catchError(() => of({type: initGameFail.type})),
      )),
    ),
  )

  next$ = createEffect(() =>
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

  flip$ = createEffect(() =>
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
