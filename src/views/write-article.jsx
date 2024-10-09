import React, { useState } from 'react'
import MyEditor from '@/components/MyEditor.jsx'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { addArticlest } from '@/api/articles.js'

export default function writeArticle() {
    const [articleTitle, setArticleTitle] = useState('')
    const [articleContent, setArticleContent] = useState('')

    const onAddArticle = async () => {
        const res = await addArticlest({
            title: articleTitle,
            overview: 'overview',
            content: articleContent,
        })
        console.log(res)
    }
    const sendDataToParent = (data) => {
        setArticleContent(data)
    }
    return (
        <div className="p-10">
            <div className="flex gap-10 mb-6">
                <TextField
                    fullWidth
                    value={articleTitle}
                    onChange={(event) => setArticleTitle(event.target.value)}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                />
                <Button
                    variant="outlined"
                    className="w-[150px]"
                    onClick={onAddArticle}
                >
                    发布
                </Button>
            </div>

            <MyEditor sendDataToParent={sendDataToParent} />
        </div>
    )
}
