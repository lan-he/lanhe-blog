import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import './App.less'
import { Menu } from 'antd'
import React from 'react'

export default function App() {
    const menuItems = [
        {
            key: 'home',
            label: '首页',
            path: '/home',
        },
        {
            key: 'tic-tac-toe',
            label: '井字棋',
            path: '/tic-tac-toe',
        },
        {
            key: 'toimg-design',
            label: '拖拽',
            path: '/toimg-design',
        },
    ]
    const navigate = useNavigate()
    const params = useLocation()
    const onClickMenu = (item) => {
        console.log(params, 'paramsparams')
        navigate('/' + item.key)
    }

    return (
        <div>
            <Menu
                className="menu-box"
                mode="horizontal"
                defaultOpenKeys={['sub1']}
                items={menuItems}
                onClick={onClickMenu}
            />
            <div className="outlet-box" id="screenshot">
                <Outlet />
            </div>
        </div>
    )
}
