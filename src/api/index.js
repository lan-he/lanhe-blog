import service from '@/utils/request.js'
// github授权
export const oauthGithubRedirect = (data) => {
    return service({
        url: `/api/oauth/github/redirect?code=${data.code}`,
        method: 'get',
    })
}
