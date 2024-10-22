import React, { useState, useEffect } from 'react'
import { getArticlest, addComments } from '@/api/articles.js'
import { useParams } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'

export default function Details() {
    const [articlestData, setArticlestData] = useState([{}, {}, {}, {}, {}])
    useEffect(() => {
        onGetArticlest()
    }, [])
    const { id } = useParams() // 获取 URL 参数中的 id
    const onGetArticlest = async () => {
        const res = await getArticlest(id)
        setArticlestData(res)
    }
    const onAddComments = async () => {
        const res = await addComments({})
        console.log(res)
    }
    return (
        <div className="flex justify-center gap-[20px] mt-[60px]">
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

                    <div className="mt-[20px] flex justify-between gap-[20px]">
                        <TextField
                            className="flex-1"
                            id="outlined-basic"
                            label="昵称(必填)"
                            variant="outlined"
                        />
                        <TextField
                            className="flex-1"
                            id="outlined-basic"
                            label="邮箱"
                            variant="outlined"
                        />
                    </div>
                    <TextField
                        className="w-full !mt-[20px]"
                        label="说点什么吧..."
                        multiline
                        rows={4}
                        defaultValue=""
                    />
                    <Button className="!mt-[20px]" variant="contained">
                        发布评论
                    </Button>

                    <div className="mt-[20px]">
                        <p>评论列表</p>
                        <hr className="mt-[5px]" />
                        <div className=" p-[14px] hover:bg-slate-100 transition-all flex gap-[20px]">
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                            <div>
                                <p className="text-[20px]">大流量卡</p>
                                <span className="text-describe text-[14px]">
                                    2023-09-15 13:52:54
                                </span>
                                <div className="mt-[8px]">
                                    你好，看完你的博客文章，感觉很不错！希望与你网站首页友情链接
                                    大流量卡 http://53go.cn
                                    专注于移动/联通/电信推出的大流量多语音活动长短期套餐手机卡的相关知识的介绍普及
                                    听说互换友情链接可以增加网站的收录量，特此来换，如果同意的话就给internetyewu@163.com发信息或者就在此回复下吧！
                                </div>
                            </div>
                        </div>
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
