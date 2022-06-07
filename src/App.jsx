import { Outlet, Link } from 'react-router-dom'
import './App.less'
import html2canvas from 'html2canvas'
import { Menu } from 'antd'
import React from 'react'

export default function App() {
    return (
        <div>
            <Menu className="menu-box" mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="home">Navigation One</Menu.Item>
                <Menu.Item>Navigation One</Menu.Item>
                <Menu.Item>Navigation One</Menu.Item>
                <Menu.Item onClick={html2canvasScreenshot}>屏幕截图</Menu.Item>
            </Menu>
            <Link to="/home">Invoices</Link> | <Link to="/about">Expenses</Link>
            <div className="outlet-box">
                <Outlet />
            </div>
        </div>
    )
}
function html2canvasScreenshot() {
    var node = document.getElementById('root')
    html2canvas(node).then(function (canvas) {
        document.body.appendChild(canvas)
    })
}
