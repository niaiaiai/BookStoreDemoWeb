import { get, ids4Instance } from './apiHelper'
import store from '../stores/index';
import qs from 'qs'
import config from '../config/httpConfig'
async function getWellKnown() {
  const appstore = store.state.app
  if (!appstore.ids4WellKnown) {
    const ids4WellKnown = await get('.well-known/openid-configuration', undefined, ids4Instance)
    store.commit('setIds4WellKnown', ids4WellKnown)
  }
}

function getResourceOwnerPasswordToken(params) {
  return new Promise((resolve, reject) => {
    const body = qs.stringify(params, { allowDots: true })
    ids4Instance.post(store.state.app.ids4WellKnown.token_endpoint, body, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then(res => {
      resolve(res.data)
      store.commit('setAccessToken', res.data.access_token)
      store.commit('setRefreshToken', res.data.refresh_token)
      store.commit('setTokenExpiresIn', res.data.expires_in)
      store.commit('setReloadFlag', false)
      
      setTimeout(() => {
        refreshToken({
          grant_type: config.ids4.refreshType,
          client_id: config.ids4.clientId,
          refresh_token: res.data.refresh_token
        })
      }, (res.data.expires_in / 2) * 1000)
    }).catch(err => {
      reject(err)
      console.log(err)
    })
  })
}

function refreshToken(params) {
  return new Promise((resolve, reject) => {
    const body = qs.stringify(params, { allowDots: true })
    ids4Instance.post(store.state.app.ids4WellKnown.token_endpoint, body, {
      headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then(res => {
      resolve(res.data)
      store.commit('setAccessToken', res.data.access_token)
      store.commit('setRefreshToken', res.data.refresh_token)
      store.commit('setTokenExpiresIn', res.data.expires_in)

      setTimeout(() => {
        refreshToken({
          grant_type: config.ids4.refreshType,
          client_id: config.ids4.clientId,
          refresh_token: res.data.refresh_token
        })
      }, (res.data.expires_in / 2) * 1000)
    }).catch(err => {
      reject(err)
      console.log(err)
    })
  })
}

export {
  getWellKnown,
  getResourceOwnerPasswordToken,
  refreshToken
}