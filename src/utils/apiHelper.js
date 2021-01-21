import qs from 'qs'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost:44314/'
});

function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(`${url}?${qs.stringify(params, { allowDots: true })}`).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
      console.log(error)
    })
  })
}

export {
  get
}