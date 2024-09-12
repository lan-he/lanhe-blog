import React, { useState, useEffect } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import switchTheme from '@/assets/lottie/switch-theme.lottie'

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
        console.log(localStorage.theme, 'localStorage.theme')

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

    return (
        <>
            <div className="flex items-center justify-between w-full px-6 border-b h-14 text-slate-700 dark:text-slate-300">
                <div>Logo</div>
                <div className="flex gap-10">
                    <div>Products</div>
                    <div>Integrations</div>
                    <div>Customers</div>
                    <div>Education</div>
                </div>
                <DotLottieReact
                    dotLottieRefCallback={setDotLottie}
                    src={switchTheme}
                    loop={false}
                    mode={lottieMode}
                    className="cursor-pointer h-[64%] w-[150px]"
                    onClick={updateView}
                />
            </div>
        </>
    )
}

export default Header
