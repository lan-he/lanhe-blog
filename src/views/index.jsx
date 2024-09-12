import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MarkdownHandle from '@/utils/markdown-handle.js'
import MarkdownLoader from '@/components/MarkdownLoader.jsx'

export default function Index() {
    const [articleList, setarticleList] = useState([])

    useEffect(() => {
        const markdownHandle = new MarkdownHandle()
        setarticleList(() => markdownHandle.getListData())
        console.log(articleList, markdownHandle.getListData(), 'articleList')
    }, [])

    return (
        <div className="max-w-[700px] m-auto ">
            {/* <div className="w-[300px] border"></div> */}
            <div className="">
                {articleList.map((item, index) => (
                    <div key={index} className="p-8 border-b cursor-pointer">
                        <h1> {item.title}</h1>
                        <p className="mt-2 text-sm text-describe">
                            {' '}
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-[300px] border">
                <div className="">
                    欢迎来到我的个人博客!
                    我是Lan,一名前端工程师,专注于分享与JavaScript相关的内容。
                    主要使用Vue和React开发,乐于探索前沿技术,并分享实战经验和开发技巧。如果你对前端开发感兴趣,欢迎一起交流和学习！
                </div>
                <DotLottieReact
                    src="https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json"
                    autoplay
                    loop={true}
                    speed={0.8}
                    className=" w-[300px]"
                />
            </div>
        </div>
    )
}
