import service from '@/utils/request.js'
// 获取列表
export const articlesList = (data) => {
    return service({
        url: `/api/articles`,
        method: 'get',
    })
}
// 新增文章
export const addArticlest = (data) => {
    return service({
        url: `/api/articles`,
        method: 'post',
        data,
    })
}
// 获取文章详情
export const getArticlest = (data) => {
    return service({
        url: `/api/articles/${data}`,
        method: 'get',
    })
}
export const articlesArticleIdComments = (data) => {
    return service({
        url: `/api/articles/${data.articleId}/comments`,
        method: 'post',
        data,
    })
}
export const getArticlesComments = (data) => {
    return service({
        url: `/api/articles/${data.articleId}/comments`,
        method: 'get',
    })
}
export const articlesArticleIdCommentsAt = (data) => {
    return service({
        url: `/api/articles/${data.articleId}/comments/${data.commentId}`,
        method: 'post',
        data,
    })
}
