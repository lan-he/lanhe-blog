import { useEffect, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import MarkdownHandle from '@/utils/markdown-handle.js'
// import MarkdownLoader from '@/components/MarkdownLoader.jsx'
import { articlesList } from '@/api/index.js'
import likeLottie from '@/assets/lottie/like.lottie'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    const [articleList, setarticleList] = useState([])

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
        console.log(data, 'datadata')
        navigate(`/details/${data}`)
    }
    return (
        <div className="flex justify-center gap-8 pt-6 m-auto">
            <div className="w-[700px] flex-grow-0">
                {articleList.map((item, index) => (
                    <div
                        key={index}
                        className="p-8 py-3 border-b cursor-pointer"
                        onClick={() => handleClick(item._id)}
                    >
                        <h1> {item.title}</h1>
                        <p className="text-sm truncate text-describe">
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                            {item.overview}
                        </p>
                        <div className="flex items-center justify-end text-[#8a919f] gap-6 mt-5">
                            <div className="flex items-center gap-1">
                                <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
                                <span className="text-sm">{item.views}</span>
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
                                        <FavoriteBorderIcon
                                            sx={{ fontSize: 20 }}
                                        />
                                    )}
                                </div>
                                <span className="text-sm">{item.likes}</span>
                            </div>
                        </div>
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
