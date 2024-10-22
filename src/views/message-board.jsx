import React, { useState, useEffect } from 'react'
import AuthorInfo from '@/components/AuthorInfo.jsx'
import MarkdownIt from 'markdown-it'

export default function Details() {
    const [aboutData, setAboutData] = useState([])
    useEffect(() => {
        onGetArticlest()
    }, [])
    return (
        <div className="flex justify-center gap-8 pt-6 m-auto">
            <div className="w-[700px]"></div>
        </div>
    )
}
