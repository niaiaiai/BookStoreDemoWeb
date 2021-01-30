import { apiInstance } from '../../utils/apiHelper'
const app = {
  state: {
    lastMenuKey: '1',
    ids4WellKnown: null,
    accessToken: null,
    refresh_token: null,
    tokenExpiresIn: null
  },
  mutations: {
    setLastMenuKey(state, key) {
      state.lastMenuKey = key
    },
    setIds4WellKnown(state, wellKnown) {
      state.ids4WellKnown = wellKnown
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken
      apiInstance.defaults.headers = { 'authorization': `bearer ${accessToken}` }
    },
    setRefreshToken(state, refresh_token) {
      state.refresh_token = refresh_token
    },
    setTokenExpiresIn(state, tokenExpiresIn) {
      state.tokenExpiresIn = tokenExpiresIn
    }
  },
  actions: {

  }
}



export default app