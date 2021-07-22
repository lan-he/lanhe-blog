import myAxios from './axios';

export function getListAPI(paramsList?:any) {
  return myAxios({
    url: '/nest/user/login',
    method: 'get'
  })
}