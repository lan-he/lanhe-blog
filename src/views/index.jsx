import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MarkdownHandle from '@/utils/markdown-handle.js'
// import MarkdownLoader from '@/components/MarkdownLoader.jsx'
import { articlesList } from '@/api/index.js'

export default function Index() {
    const [articleList, setarticleList] = useState([])

    useEffect(() => {
        // const markdownHandle = new MarkdownHandle()
        // setarticleList(() => markdownHandle.getListData())
        getArticlesList()
    }, [])
    const getArticlesList = async () => {
        const res = await articlesList()
        console.log(res, 'resres')
    }
    return (
        <div className="flex justify-center gap-8 pt-6 m-auto">
            <div className="w-[700px] flex-grow-0">
                {articleList.map((item, index) => (
                    <div key={index} className="p-8 border-b cursor-pointer">
                        <h1> {item.title}</h1>
                        <p className="mt-2 text-sm text-describe">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
            <div className="w-[270px] flex-grow-0 border p-4">
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
                    className="w-full mt-4"
                />
            </div>
        </div>
    )
}
