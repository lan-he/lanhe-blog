---
title: Vite解决发布缓存问题 测试
description: 页面的描述
createTime: 1725953723297
---

以下代码可以自定义每个文件的输出名字

```js
export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                // 入口文件名
                entryFileNames: `assets/[name].js`,
                // 块文件名
                chunkFileNames: `assets/[name]-[hash].js`,
                // 资源文件名 css 图片等等
                assetFileNames: `assets/[name]-[hash].[ext]`,
            },
        },
    },
})
```

简单做法只需要在每个文件后面加一个当前打包时候的时间错，比较优美的做法是给文件加一个唯一指纹，做法相同

```js
const timestamp = new Date().getTime()

export default defineConfig({
    build: {
        rollupOptions: {
            output: {
                // 入口文件名
                entryFileNames: `assets/[name].${timestamp}.js`,
                // 块文件名
                chunkFileNames: `assets/[name]-[hash].${timestamp}.js`,
                // 资源文件名 css 图片等等
                assetFileNames: `assets/[name]-[hash].${timestamp}.[ext]`,
            },
        },
    },
})
```
