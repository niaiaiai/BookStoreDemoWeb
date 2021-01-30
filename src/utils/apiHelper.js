import qs from 'qs'
import axios from 'axios'
import config from '../config/httpConfig'
import store from '../stores/index'

const apiInstance = axios.create({
  baseURL: config.apiBaseUrl,
  headers: { 'authorization': `bearer ${store.state.app.accessToken}` }
});
const ids4Instance = axios.create({
  baseURL: config.ids4.idsAuthority
});

function get(url, params, instance = apiInstance) {
  return new Promise((resolve, reject) => {
    instance.get(`${url}?${qs.stringify(params, { allowDots: true })}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  })
}

function put(url, data, instance = apiInstance) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  })
}

function post(url, data, instance = apiInstance) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  })
}

export {
  apiInstance,
  ids4Instance,
  get,
  put,
  post
}