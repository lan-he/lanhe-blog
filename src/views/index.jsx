import { useEffect, useState } from 'react'
import MarkdownHandle from '@/utils/markdown-handle.js'
// import MarkdownLoader from '@/components/MarkdownLoader.jsx'
import { articlesList } from '@/api/articles.js'
import likeLottie from '@/assets/lottie/like.lottie'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { useNavigate } from 'react-router-dom'
import AuthorInfo from '@/components/AuthorInfo.jsx'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

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
                {articleList.map((item, index) =>
                    item._id ? (
                        <div
                            key={index}
                            className="p-8 py-3 border-b cursor-pointer"
                            onClick={() => handleClick(item._id)}
                        >
                            <h1> {item.title}</h1>
                            <p className="text-sm truncate text-describe">
                                {item.overview}
                            </p>
                            <div className="flex items-center justify-end text-[#8a919f] gap-6 mt-2">
                                <div className="flex items-center gap-1">
                                    <RemoveRedEyeIcon sx={{ fontSize: 20 }} />
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
                                            <FavoriteBorderIcon
                                                sx={{ fontSize: 20 }}
                                            />
                                        )}
                                    </div>
                                    <span className="text-sm">
                                        {item.likes}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Stack
                            key={index}
                            spacing={1}
                            className="flex p-8 py-3 border-b"
                        >
                            <Skeleton variant="text" width={200} height={27} />
                            <Skeleton
                                variant="text"
                                width={250}
                                height={20}
                                className="!mt-0"
                            />
                            <Skeleton
                                variant="text"
                                width={100}
                                className="block !ml-auto !mt-0"
                            />
                        </Stack>
                    )
                )}
            </div>
            <div className="lg:hidden">
                <AuthorInfo />
            </div>
        </div>
    )
}
