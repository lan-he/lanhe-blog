import React, { useState, useEffect } from 'react'
import { getArticlest } from '@/api/articles.js'
import { useParams } from 'react-router-dom'

export default function Details() {
    useEffect(() => {
        onGetArticlest()
    }, [])
    const { id } = useParams() // 获取 URL 参数中的 id
    const onGetArticlest = async () => {
        const res = await getArticlest(id)
        console.log(res, 'resres')
    }
    return <>details</>
}
