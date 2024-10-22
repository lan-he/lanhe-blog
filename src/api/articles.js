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
// 添加文章评论
export const addComments = (data) => {
    return service({
        url: `/api/comments`,
        method: 'post',
        data,
    })
}
