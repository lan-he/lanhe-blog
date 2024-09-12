export default class MarkdownHandle {
    constructor(parameters) {
        this.allAdtaList = []
        this.getAllData()
    }
    getAllData() {
        // 批量导入 markdown 文件
        const markdownFiles = import.meta.glob('/src/markdown/*.md', {
            eager: true,
            as: 'raw',
        })
        // 将导入的内容转为数组
        const postsData = Object.keys(markdownFiles).map((filePath) => {
            return this.parseFrontmatter(markdownFiles[filePath])
        })
        this.allAdtaList = postsData
    }
    // 将 frontmatter 信息解析为 JavaScript 对象的函数
    parseFrontmatter = (markdown) => {
        const frontmatterRegex = /^---\r\n([\s\S]+?)\r\n---/
        const match = markdown.match(frontmatterRegex)

        let metadata = {}
        let content = markdown

        if (match) {
            const frontmatter = match[1]
            content = markdown.slice(match[0].length) // 去掉 frontmatter 的部分

            // 解析 frontmatter 字符串为对象
            frontmatter.split('\n').forEach((line) => {
                const [key, value] = line.split(':').map((str) => str.trim())
                if (key) {
                    metadata[key] = value
                }
            })
        }
        return { ...metadata, content }
    }
    getListData() {
        console.log(this.allAdtaList, '2222222222')
        return this.allAdtaList
    }
}
