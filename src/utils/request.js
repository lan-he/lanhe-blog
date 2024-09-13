import axios from 'axios'
let service = axios.create({
    baseURL: '',
    // baseURL: import.meta.env.DEV ? '' : import.meta.env.VITE_API_PATH,
    timeout: 20000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        // config.headers['AuthAuthorize'] = persistStore.userInfo?.token || ''
        config.url = import.meta.env.DEV
            ? config.url
            : import.meta.env.VITE_API_PATH + config.url
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)
//响应拦截器
service.interceptors.response.use(
    async (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
