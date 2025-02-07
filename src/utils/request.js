import axios from 'axios'
import { store } from '@/store/store.js'
import { clearUserInfo } from '@/store/userSlice.js'
let service = axios.create({
    baseURL: '',
    // baseURL: import.meta.env.DEV ? '' : import.meta.env.VITE_API_PATH,
    timeout: 40000,
})
// 请求拦截器
service.interceptors.request.use(
    (config) => {
        const state = store.getState()
        const token = state.user.userInfo?.token
        config.headers['Authorization'] = `Bearer ${token}`
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
        if (response.code == 200) {
            // clearUserInfo 我要在这里调用
            store.dispatch(clearUserInfo())
        }
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
