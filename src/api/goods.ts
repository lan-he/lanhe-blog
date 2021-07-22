
import request from './axios'

// export function getListAPI(paramsList?:any) {
//   return request({
//     url: '/api/nest/user/login',
//     method: 'post'
//   })
// }
export function getListAPI(params?:any) {
  return request({
    url: `/nest/user/login`,
    method: 'post',
    data: params
  })
}