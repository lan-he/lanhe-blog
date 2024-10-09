import service from '@/utils/request.js'
// 获取列表
export const articlesList = (data) => {
    return service({
        url: `/api/articles`,
        method: 'get',
    })
}
// github授权
export const oauthGithubRedirect = (data) => {
    return service({
        url: `/api/oauth/github/redirect?code=${data.code}`,
        method: 'get',
    })
}
