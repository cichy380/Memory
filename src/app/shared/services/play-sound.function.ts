import { environment } from '../../../environments/environment'


export function playSound(audioFileName: string) {
  const audio = new Audio(`${environment.assetsPath}/audio/${audioFileName}`)
  audio.load()
  audio.play()
}
