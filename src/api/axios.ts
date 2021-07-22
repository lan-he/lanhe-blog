import axios from 'axios'

function myAxios(axiosConfig: any, customOptions?: any) {
  const service = axios.create({
    baseURL: 'http://localhost:3000', // 设置统一的请求前缀
    timeout: 10000, // 设置统一的超时时长
  })

  // 自定义配置
  const custom_options = Object.assign(
    {
      repeat_request_cancel: true, // 是否开启取消重复请求, 默认为 true
    },
    customOptions
  )

  service.interceptors.request.use(
    (config) => {
      removePending(config)
      custom_options.repeat_request_cancel && addPending(config)
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    (response) => {
      removePending(response.config)
      return response
    },
    (error) => {
      error.config && removePending(error.config)
      return Promise.reject(error)
    }
  )

  return service(axiosConfig)
}

const pendingMap = new Map()
/**
 * 生成每个请求唯一的键
 * @param {*} config
 * @returns string
 */
function getPendingKey(config: any) {
  const { url, method, params } = config
  let { data } = config
  if (typeof data === 'string') data = JSON.parse(data) // response里面返回的config.data是个字符串对象
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}
/**
 * 储存每个请求唯一值, 也就是cancel()方法, 用于取消请求
 * @param {*} config
 */
function addPending(config: any) {
  const pendingKey = getPendingKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pendingMap.has(pendingKey)) {
        pendingMap.set(pendingKey, cancel)
      }
    })
}
/**
 * 删除重复的请求
 * @param {*} config
 */
function removePending(config: any) {
  const pendingKey = getPendingKey(config)
  if (pendingMap.has(pendingKey)) {
    const cancelToken = pendingMap.get(pendingKey)
    cancelToken(pendingKey)
    pendingMap.delete(pendingKey)
  }
}
export default myAxios
