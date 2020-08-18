import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { flipGameCard, flipGameCardFail, flipGameCardSuccess, readDeck, readDeckFail, readDeckSuccess } from './game.actions'
import { GameService } from '../services/game.service'
import { Card } from '../components/card/card.model'
import { ResponseModel } from '../../../shared/models/response-model.model'


@Injectable()
export class GameEffects {
  constructor(private actions$: Actions, private service: GameService) {
  }

  loadDeck$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readDeck),
      mergeMap(() => this.service.fetchDeck().pipe(
        map((response: ResponseModel<Card[]>) => ({
          deck: response.data,
          type: readDeckSuccess.type,
        })),
        catchError(() => of({type: readDeckFail.type})),
      )),
    ),
  )

  flipCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(flipGameCard),
      mergeMap(({cardIndex}) => this.service.flipCard(cardIndex).pipe(
        map((response: ResponseModel<number>) => ({
          cardIndex: response.data,
          type: flipGameCardSuccess.type,
        })),
        catchError(() => of({type: flipGameCardFail.type})),
      )),
    ),
  )
}
