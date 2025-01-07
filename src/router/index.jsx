import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/components/Layout.jsx'
import Index from '@/views/index.jsx'
import ErrorPage from '@/views/error-page.jsx'
import Details from '@/views/details.jsx'
import Demo from '@/views/demo.jsx'
import WriteArticle from '@/views/write-article.jsx'
import About from '@/views/about.jsx'
import Test from '@/views/test.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Index />,
            },
            {
                path: '/details/:id',
                element: <Details />,
            },
            {
                path: '/demo',
                element: <Demo />,
            },
            {
                path: '/write-article',
                element: <WriteArticle />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/test',
                element: <Test />,
            },
        ],
    },
])
export default router
