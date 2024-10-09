import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from '@/router/index.jsx'
import { getQueryParam } from '@/utils/utli.js'
import { oauthGithubRedirect } from '@/api/index.js'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '@/store/persistReducer.js'

function App() {
    const dispatch = useDispatch()
    const onOauthGithubRedirect = async () => {
        if (getQueryParam('code')) {
            const res = await oauthGithubRedirect({
                code: getQueryParam('code'),
            })
            dispatch(setUserInfo(res))
        }
    }
    onOauthGithubRedirect()
    return <RouterProvider router={router} />
}

export default App
