export function playSound(audioFileName: string) {
  const audio = new Audio()
  audio.src = `../../../assets/audio/${audioFileName}`
  audio.load()
  audio.play()
}
