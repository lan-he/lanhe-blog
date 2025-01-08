import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header.jsx'
import LoginDialog from '@/components/LoginDialog.jsx'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet /> {/* 根据路由动态渲染页面 */}
            </main>
            <LoginDialog />
        </div>
    )
}

export default Layout
