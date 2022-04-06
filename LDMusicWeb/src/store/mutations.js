import * as types from './mutation-types'

const mutations = {
    setLogin (state, val = false) {
        state.isLogin = val
    },
    setUserInfo (state, val = null) {
        state.userInfo = val
    },
    setLoginDialog (state, val = null) {
        state.loginDialogVisible = val
    },
    [types.SET_PLAYSTATUS] (state, val = false) {
        state.isPlayed = val
        console.log(state, 'state')
        if (val === true) {
            state.jayChouPlayStatus = false
        }
    },
    [types.SET_PLAYLIST] (state, val = null) {
        state.playList = val
        window.localStorage.setItem('playList', JSON.stringify(val))
    },
    [types.SET_PLAYINDEX] (state, val = 0) {
        state.playIndex = val
        window.localStorage.setItem('playIndex', val)
    },
    setPlayListTips (state, val = null) {
        state.playListTips = val
    },
    setCurrentUserInfo (state, val = null) {
        state.currentUserInfo = val
    },
    setJayChouPlay (state, val = null) {
      if (val != null) {
        state.jayChouPlayStatus = val
        return
      }
      state.jayChouPlayStatus = !state.jayChouPlayStatus
      if (state.jayChouPlayStatus) {
        state.isPlayed = false
      }
    },
    setJayChouPlayIndex (state, val = 0) {
      state.jayChouPlayIndex = val
    },
    setJayChouList (state, val = []) {
      state.jayChouList = val
    },
    setCurrentTime (state, val = 0) {
      state.currentTime = val
    }
}
export default mutations
