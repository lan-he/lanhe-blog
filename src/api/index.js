import service from '@/utils/request.js'
// github授权
export const oauthGithubRedirect = (data) => {
    return service({
        url: `/api/auth/github?code=${data.code}`,
        method: 'get',
    })
}

export const oauthGoogleRedirect = (data) => {
    return service({
        url: `/api/auth/google?code=${data.code}`,
        method: 'get',
    })
}
