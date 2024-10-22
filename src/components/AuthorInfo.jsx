import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const Layout = () => {
    return (
        <div className="w-[340px] flex-grow-0 border p-4 flex justify-center flex-col items-center">
            <div
                className="w-[100px] h-[100px] rounded-full bg-white transition-all shadow-xl hover:shadow-[#0078E7]"
                style={{ boxShadow: '0 0 10px #0003' }}
            ></div>
            <div className="mt-3 font-bold text-center">Lan he</div>

            <div className="mt-6">
                欢迎来到我的个人博客!
                我是Lan,一名前端工程师,专注于分享与JavaScript相关的内容。
                主要使用Vue和React开发,乐于探索前沿技术,并分享实战经验和开发技巧。如果你对前端开发感兴趣,欢迎一起交流和学习！
            </div>
            <DotLottieReact
                src="https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
                autoplay
                loop={true}
                speed={0.8}
                className="w-full mt-4"
            />
        </div>
    )
}

export default Layout
