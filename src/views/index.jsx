import { useEffect, useState } from 'react'
import MarkdownHandle from '@/utils/markdown-handle.js'
import { articlesList } from '@/api/articles.js'
import likeLottie from '@/assets/lottie/like.lottie'
import { useNavigate } from 'react-router-dom'
import AuthorInfo from '@/components/AuthorInfo.jsx'
import { Button, Input, Skeleton } from 'antd'

export default function Index() {
    const [articleList, setarticleList] = useState([{}, {}, {}, {}, {}])

    useEffect(() => {
        // const markdownHandle = new MarkdownHandle()
        // setarticleList(() => markdownHandle.getListData())
        getArticlesList()
    }, [])
    const getArticlesList = async () => {
        const res = await articlesList()
        let articlesListSet = res.data.map((item) => {
            item.isLike = false
            return item
        })
        setarticleList(articlesListSet)
    }
    const navigate = useNavigate()
    const handleClick = (data) => {
        navigate(`/details/${data}`)
    }
    return (
        <div className="flex justify-center gap-[20px] pt-6 m-auto">
            <div className="w-[800px] flex-grow-0">
                <Button type="primary">Primary Button</Button>
                <Input placeholder="Basic usage" />
                {articleList.map((item, index) =>
                    item.id ? (
                        <div
                            key={index}
                            className="p-8 py-3 border-b cursor-pointer"
                            onClick={() => handleClick(item.id)}
                        >
                            <h1> {item.title}</h1>
                            <p className="text-sm truncate text-describe">
                                {item.overview}
                            </p>
                            <div className="flex items-center justify-end text-[#8a919f] gap-6 mt-2">
                                <div className="flex items-center gap-1">
                                    <svg className="icon" ariaHidden="true">
                                        <use xlinkHref="#icon-view"></use>
                                    </svg>
                                    <span className="text-sm">
                                        {item.views}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="relative flex w-[20px] h-[20px] ">
                                        {item.isLike ? (
                                            <DotLottieReact
                                                src={likeLottie}
                                                autoplay
                                                loop={false}
                                                speed={0.7}
                                                className="w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                            />
                                        ) : (
                                            <svg
                                                className="icon"
                                                ariaHidden="true"
                                            >
                                                <use xlinkHref="#icon-like"></use>
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-sm">
                                        {item.likes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 py-3 border-b ">
                            <Skeleton active />
                        </div>
                    )
                )}
            </div>
            <div className="lg:hidden">
                <AuthorInfo />
            </div>
        </div>
    )
}
