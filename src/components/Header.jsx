import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import switchTheme from '@/assets/lottie/switch-theme.lottie'
import Avatar from '@mui/material/Avatar'
import Drawer from '@mui/material/Drawer'
import { useSelector, useDispatch } from 'react-redux'
import { setIsOpenLogin } from '@/store/indexReducer.js'
import { NavLink } from 'react-router-dom'

function Header() {
    const [dotLottie, setDotLottie] = useState(null)
    const [lottieMode, setLottieMode] = useState('forward')
    const changeThemeSet = () => {
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }
    useEffect(() => {
        if (dotLottie !== null) {
            if (localStorage.theme === 'dark') {
                setLottieMode('forward')
                setTimeout(() => {
                    dotLottie.play()
                }, 200)
            } else {
                dotLottie.setFrame(0)
            }
        }
    }, [dotLottie])
    const changeTheme = () => {
        if (localStorage.theme == 'light') {
            localStorage.theme = 'dark'
            setLottieMode('forward')
            setTimeout(() => {
                dotLottie.play()
            }, 300)
        } else {
            localStorage.theme = 'light'
            setLottieMode('reverse')
            setTimeout(() => {
                dotLottie.play()
            }, 0)
        }
        changeThemeSet()
    }
    useEffect(() => {
        changeThemeSet()
    }, [])

    function updateView(event) {
        //在不支持的浏览器里不做动画
        if (!document.startViewTransition) {
            changeTheme()
            return
        }
        // 开始一次视图过渡：
        const transition = document.startViewTransition(() => changeTheme())
        transition.ready.then(() => {
            const x = event.clientX
            const y = event.clientY
            //计算按钮到最远点的距离用作裁剪圆形的半径
            const endRadius = Math.hypot(
                Math.max(x, innerWidth - x),
                Math.max(y, innerHeight - y)
            )
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
            //开始动画
            document.documentElement.animate(
                {
                    clipPath:
                        localStorage.theme == 'dark'
                            ? [...clipPath].reverse()
                            : clipPath,
                },
                {
                    duration: 300,
                    easing: 'ease-in',
                    pseudoElement:
                        localStorage.theme == 'dark'
                            ? '::view-transition-old(root)'
                            : '::view-transition-new(root)',
                }
            )
        })
    }
    const userInfo = useSelector((state) => state.persist.userInfo)
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false)
    const onClickProfilePicture = () => {
        console.log(userInfo, 'userInfouserInfouserInfo')
        if (userInfo._id) {
            setOpen(true)
        } else {
            dispatch(setIsOpenLogin(true))
        }
    }
    return (
        <>
            <div className="flex items-center justify-between w-full px-6 border-b h-14 text-slate-700 dark:text-slate-300">
                <NavLink
                    to={`/`}
                    className={({ isActive }) =>
                        isActive ? 'text-red-300' : ''
                    }
                    end
                >
                    Lanhe 的博客
                </NavLink>

                <div className="flex gap-10">
                    <NavLink
                        to={`/programming`}
                        className={({ isActive }) =>
                            isActive ? 'text-red-300' : ''
                        }
                    >
                        编程
                    </NavLink>
                    <NavLink
                        to={`/about`}
                        className={({ isActive }) =>
                            isActive ? 'text-red-300' : ''
                        }
                    >
                        关于我
                    </NavLink>
                    <NavLink
                        to={`/message-board`}
                        className={({ isActive }) =>
                            isActive ? 'text-red-300' : ''
                        }
                    >
                        留言板
                    </NavLink>
                    <NavLink
                        to={`/travel-notes`}
                        className={({ isActive }) =>
                            isActive ? 'text-red-300' : ''
                        }
                    >
                        游记
                    </NavLink>
                </div>
                <div className="flex items-center h-full gap-8">
                    <DotLottieReact
                        dotLottieRefCallback={setDotLottie}
                        src={switchTheme}
                        loop={false}
                        mode={lottieMode}
                        className="cursor-pointer h-[64%]"
                        onClick={updateView}
                    />
                    <Avatar
                        alt="Login"
                        src={userInfo.avatar}
                        className="border border-gray-400 cursor-pointer"
                        onClick={onClickProfilePicture}
                    />
                </div>
            </div>
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <div className="w-[300px] py-8">
                    <div className="p-4 cursor-pointer hover:bg-slate-400">
                        <NavLink
                            to="/write-article"
                            className={({ isActive }) =>
                                isActive ? 'text-red-300' : ''
                            }
                        >
                            写文章
                        </NavLink>
                    </div>
                </div>
            </Drawer>
        </>
    )
}

export default Header
