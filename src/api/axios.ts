import axios from 'axios'

const service = axios.create({
  baseURL: '/api', // url = base url + request url
  timeout: 10000 // request timeout
})
service.interceptors.request.use(
  config => {
    console.log(config,'aaaaaaaaaaaaaa')
    config.headers['Cache-Control'] = 'no-cache'
    // config.headers['Access-Control-Allow-Origin'] = `\*`
    console.log(config,'aaaaaaaaaaaaaa')
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) 
    return Promise.reject(error)
  }
)

export default service