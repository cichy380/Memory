import { Injectable } from '@angular/core'
import { of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { Actions, createEffect, ofType } from '@ngrx/effects'

import { readDeck, readDeckFail, readDeckSuccess } from './game.actions'
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
}
