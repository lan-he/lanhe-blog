import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router/index.jsx'
import { getQueryParam } from '@/utils/utli.js'
import { oauthGithubRedirect, oauthGoogleRedirect } from '@/api/index.js'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/store/userSlice.js'

function App() {
    const dispatch = useDispatch()
    const onOauthGithubRedirect = async () => {
        let code = getQueryParam('code')
        let res = {}
        if (code) {
            if (code.length > 20) {
                res = await oauthGoogleRedirect({
                    code,
                })
            } else {
                res = await oauthGithubRedirect({
                    code,
                })
            }
            if (res.code == 200) {
                dispatch(setUserInfo(res.data))
                const url = new URL(window.location.href)
                url.search = ''
                // 使用history.replaceState更新URL，不刷新页面
                window.history.replaceState({}, document.title, url.toString())
            }
        }
    }
    onOauthGithubRedirect()
    return <RouterProvider router={router} />
}

export default App
