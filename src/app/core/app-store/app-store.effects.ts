import { Type } from '@angular/core'
import { SharedEffects } from '../../shared/store/shared.effects'
import { GameEffects } from '../../features/game/store/game.effects'


export const appEffects: Type<any>[] = [
  SharedEffects,
  GameEffects,
]
