import React, { useState, useEffect } from 'react'
import AuthorInfo from '@/components/AuthorInfo.jsx'
import MarkdownIt from 'markdown-it'

export default function Details() {
    const [aboutData, setAboutData] = useState([])
    useEffect(() => {
        onGetArticlest()
    }, [])
    const mdParser = new MarkdownIt(/* Markdown-it options */)
    const onGetArticlest = async () => {
        setAboutData(
            mdParser.render(`
                精通使用HTML5、CSS3，精通响应式页面开发，能高效还原UI设计，熟练使用Tailwind CSS超快速完成布局   
                熟练掌握JavaScript语言，掌握ES6+语法，提高工作效力的同时提升代码的强壮度   
                熟练使用Vue3、Vue2及全家桶，熟练组件封装，了解一定原理，具备独立开发能力   
                熟练使用React 及全家桶，熟悉Hook的使用，了解一定原理，具备独立开发能力   
                熟悉BTC生态，熟悉Web3、区块链、NFT，熟悉链上交互，可完成Dapp去中心化应用开发，了解Solidity   
                熟悉微信小程序、微信公众号H5、支付宝小程序开发，以及其他平台小程序开发   
                熟悉uni-app、Taro等跨平台技术，了解React Native，高效实现业务需求   
                熟悉Canvas，熟悉PixiJS可开发交互式小游戏，了解ThreeJS   
                了解 Node.js,了解Express、Koa、Nest.js ，可进行业务开发   
                具有良好的审美水平，能够把握好UI细节，能高效灵活的写出样式，具有有创造性   
            `)
        )
    }
    return (
        <div className="flex justify-center gap-8 pt-6 m-auto">
            <div
                className="w-[700px]"
                dangerouslySetInnerHTML={{ __html: aboutData }}
            ></div>
            <div className="lg:hidden">
                <AuthorInfo />
            </div>
        </div>
    )
}
