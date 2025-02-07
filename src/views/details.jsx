import React, { useState, useEffect } from 'react'
import {
    getArticlest,
    articlesArticleIdComments,
    getArticlesComments,
} from '@/api/articles.js'
import { useParams } from 'react-router-dom'
// import TextField from '@mui/material/TextField'
// import Button from '@mui/material/Button'
// import Avatar from '@mui/material/Avatar'

import { Button, Input, Avatar } from 'antd'
const { TextArea } = Input
export default function Details() {
    const [articlestData, setArticlestData] = useState({})
    const [articlesComments, setArticlesComments] = useState([])
    // 状态管理输入框的值
    const [comment, setComment] = useState('')

    useEffect(() => {
        onGetArticlest()
        onGetArticlesComments()
    }, [])
    const { id } = useParams() // 获取 URL 参数中的 id
    const onGetArticlest = async () => {
        const res = await getArticlest(id)
        setArticlestData(res)
    }
    const onGetArticlesComments = async () => {
        const res = await getArticlesComments({
            articleId: id,
        })
        console.log(res, 'resresres')
        res.data.map((item) => {
            item.isComment = false
        })
        setArticlesComments(res.data)
    }
    const onAddComments = async (commentIdThis) => {
        return
        const res = await articlesArticleIdComments({
            articleId: Number(id),
            content: comment,
            parentCommentId: commentIdThis ? commentIdThis : null,
        })
        onGetArticlesComments()
        setComment('')
    }
    // 处理输入框变化
    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }
    const onAddCommentsClick = (item, index) => {
        // 创建一个新的数组，避免直接修改原状态
        const updatedComments = articlesComments.map((comment, i) => {
            if (i === index) {
                // 找到需要更新的评论，更新 isComment 字段
                return {
                    ...comment,
                    isComment: !comment.isComment, // 切换 isComment 的值
                }
            }
            return comment // 其他评论保持不变
        })
        setArticlesComments(updatedComments)
    }
    return (
        <div className="flex justify-center gap-[20px] mt-[60px] pb-[100px]">
            <div className="w-[870px] flex flex-col gap-[20px]">
                <div className=" border py-[28px] px-[36px]">
                    <h1 className="text-[32px]">{articlestData.title}</h1>
                    <div className="text-describe text-[16px] mt-[8px]">
                        <span>Lanhe</span>
                        <span>2023年02月25日 12:48 </span>
                        <span>1633</span>
                        <span>3</span>
                    </div>
                    <div className="mt-[20px]">
                        PerfMatch
                        是一款改进版的雇主-外籍劳工匹配工具，是一个同时考虑外籍劳工（FDWs）和雇主双方需求的双向匹配平台。PerfMatch
                        旨在维护FDWs的权益，让FDWs有机会发出自己的声音。
                        演示网址：https://perfmatch.github.io/
                        仓库地址：https://github.com/liangchuxin/PerfMatch 前端
                        PerfMatch 的前端使用的是 ReactJS
                        框架，本小白接触过的唯一一个前端框架。和原生方案相比，使用
                        ReactJs
                        的好处在于当几个页面有相同的部分时，从一个页面切换到另一个页面便不需要整个页面重新加载，而是只需要加载变化的部分。一个极端的例子是，当只有一行数据变了的时候，原生方案需要加载整个
                        innerHTML，造成巨大额浪费，ReactJS 则不需要。 React
                        还有非常好的一点是，所有的动作、动画都由 state
                        管理，各种操作集中于一处。虽然现在仍然被各种 state 的
                        bug 卡得满头包，但为了还是坚持折腾下去继续学习
                    </div>
                </div>
                <div className=" border py-[28px] px-[36px]">
                    <h1 className="text-[24px]">
                        发表评论
                        <span className="text-describe text-[16px] ml-3">
                            (已发表0条评论)
                        </span>
                    </h1>
                    <TextArea rows={4} />
                    <div className="flex justify-end">
                        <Button
                            className="!mt-[20px] ml-auto"
                            variant="contained"
                            onClick={() => {
                                onAddComments()
                            }}
                        >
                            发布评论
                        </Button>
                    </div>

                    <div className="mt-[20px]">
                        <p>评论列表</p>
                        <hr className="mt-[5px]" />
                        {articlesComments.map((item, index) => {
                            return (
                                <div
                                    key={item.id}
                                    className="p-[14px] px-0 transition-all flex gap-[20px]"
                                >
                                    <Avatar
                                        className="border"
                                        alt="Remy Sharp"
                                        src={item.user_avatar}
                                    />
                                    <div className="flex flex-col gap-[8px] w-full">
                                        <p className="text-[13px] text-[#61666D]">
                                            {item.user_nickname}
                                        </p>
                                        <div className="text-[#18191C] text-[15px]">
                                            {item.content}
                                        </div>
                                        <div className="flex gap-[30px]">
                                            <span className="text-describe text-[13px]">
                                                {item.created_at}
                                            </span>
                                            <span
                                                className="text-describe text-[13px] cursor-pointer"
                                                onClick={() =>
                                                    onAddCommentsClick(
                                                        item,
                                                        index
                                                    )
                                                }
                                            >
                                                回复
                                            </span>
                                        </div>
                                        {item.replies.map((itemSon) => {
                                            return (
                                                <div
                                                    key={itemSon.id}
                                                    className="flex gap-[20px]"
                                                >
                                                    <Avatar
                                                        className="border"
                                                        alt="Remy Sharp"
                                                        src={item.user_avatar}
                                                    />
                                                    <div className="gap-[20px]">
                                                        <p className="text-[13px] text-[#61666D]">
                                                            {
                                                                itemSon.user_nickname
                                                            }
                                                        </p>
                                                        <div className="text-[#18191C] text-[15px]">
                                                            {itemSon.content}
                                                        </div>
                                                        <div className="flex gap-[30px]">
                                                            <span className="text-describe text-[13px]">
                                                                {
                                                                    itemSon.created_at
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        {item.isComment && (
                                            <div>
                                                <TextArea
                                                    className="w-full"
                                                    label="请输入评论"
                                                    variant="outlined"
                                                    value={comment} // 绑定值
                                                    onChange={
                                                        handleCommentChange
                                                    } // 监听变化
                                                />
                                                <div className="flex justify-end">
                                                    <Button
                                                        className="!mt-[20px] ml-auto"
                                                        variant="contained"
                                                        onClick={() => {
                                                            onAddComments(
                                                                item.id
                                                            )
                                                        }}
                                                    >
                                                        发布评论
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="border-b border-[#E3E5E7]"></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="w-[400px]">
                <div className="w-full border flex gap-[10px] flex-wrap p-[22px]">
                    <span className="bg-[#f1f1f1] px-1">其他(23)</span>
                    <span className="bg-[#f1f1f1] px-1">其他(23)</span>
                    <span className="bg-[#f1f1f1] px-1">其他(23)</span>
                    <span className="bg-[#f1f1f1] px-1">其他22(23)</span>
                    <span className="bg-[#f1f1f1] px-1">其他(23)</span>
                    <span className="bg-[#f1f1f1] px-1">
                        其他(2sssssssssssssssssss3)
                    </span>
                    <span className="bg-[#f1f1f1] px-1">其他(23)</span>
                </div>
            </div>
        </div>
    )
}
