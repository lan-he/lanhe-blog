import service from '@/utils/request.js'
// 获取列表
export const articlesList = (data) => {
    return service({
        url: `/api/articles`,
        method: 'get',
    })
}
