export const singer = state => state.singer

export const playList = state => state.playList

export const fullScreen = state => state.fullScreen

export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}
