// src/components/MarkdownLoader.jsx
import React, { useEffect, useState } from 'react'
// import ReactMarkdown from 'react-markdown'

{
    /* <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script><lottie-player src="https://lottie.host/1ee9e4c5-ea6d-40b6-ab9a-c1d3ca18de72/dGmMBRAdrE.json" background="##FFFFFF" speed="1" style="width: 300px; height: 300px" loop controls autoplay direction="1" mode="normal"></lottie-player> */
}
const MarkdownLoader = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // 批量导入 markdown 文件
        const markdownFiles = import.meta.glob('/src/assets/markdown/*.md', {
            eager: true,
            as: 'raw',
        })
        console.log(markdownFiles, 'filesssssss')

        // 将导入的内容转为数组
        const postsData = Object.keys(markdownFiles).map((filePath) => {
            console.log(filePath, 'filePathfilePath')

            return {
                path: filePath,
                content: markdownFiles[filePath],
            }
        })

        setPosts(postsData)
    }, [])

    return (
        <div>
            {/* {posts.map((post, index) => (
                <div key={index}>
                    <h2>{post.path.split('/').pop()}</h2>
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            ))} */}
        </div>
    )
}

export default MarkdownLoader
