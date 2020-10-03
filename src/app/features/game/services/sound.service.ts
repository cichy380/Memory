import { environment } from '../../../../environments/environment'


export class SoundService {
  private assetsPath = environment.production ? 'assets' : '../../../assets'

  public load(audioFileNames: string[]) {
    audioFileNames.forEach(audioFileName => {
      const audio = new Audio(`${this.assetsPath}/audio/${audioFileName}`)
      audio.load()
    })
  }

  public play(audioFileName: string) {
    const audio = new Audio(`${this.assetsPath}/audio/${audioFileName}`)
    audio.play()
  }
}
