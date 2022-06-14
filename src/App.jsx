import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import './App.less'
import { Menu, Button } from 'antd'
import React, { useState, useEffect } from 'react'
import html2canvas from 'html2canvas'
import ScreenshotModal from '@/conponent/screenshot-modal.jsx'

export default function App() {
    const menuItems = [
        {
            key: '/',
            label: '首页',
        },
        {
            key: '/tic-tac-toe',
            label: '井字棋',
        },
        {
            key: '/toimg-design',
            label: '拖拽',
        },
    ]
    const navigate = useNavigate()
    const params = useLocation()
    const onClickMenu = (item) => {
        navigate(item.key)
    }
    const [current, setCurrent] = useState('/')
    useEffect(() => {
        setCurrent(params.pathname)
    }, [params.pathname, current])

    // 截图
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [imgBeas64, setImgBeas64] = useState(false)
    const html2canvasScreenshot = () => {
        var node = document.getElementById('screenshot')
        html2canvas(node, { useCORS: true }).then((canvas) => {
            setImgBeas64(canvas.toDataURL('image/png'))
            // const dataImg = new Image()
            // dataImg.src = canvas.toDataURL('image/png')
            // const alink = document.createElement("a");
            // alink.href = dataImg.src;
            // alink.download = "testImg.jpg";
            // alink.click();
            setIsModalVisible(true)
        })
    }

    const onHandleCancels = () => {
        setIsModalVisible(false)
    }
    return (
        <div className="App">
            <Menu
                className="menu-box"
                mode="horizontal"
                selectedKeys={[current]}
                items={menuItems}
                onClick={onClickMenu}
            />
            <div className="outlet-box" id="screenshot">
                <Outlet />
            </div>
            <Button
                className="screenshot-button"
                onClick={html2canvasScreenshot}
                type="primary"
                shape="circle"
                size="large"
            >
                截图
            </Button>
            <ScreenshotModal
                imgBeas64Show={imgBeas64}
                isModalVisible={isModalVisible}
                onHandleCancel={onHandleCancels}
            />
        </div>
    )
}
