import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from '@/views/index.jsx'
import ErrorPage from '@/views/error-page.jsx'
import Details from '@/views/details.jsx'
import Demo from '@/views/demo.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/details',
        element: <Details />,
    },
    {
        path: '/demo',
        element: <Demo />,
    },
])
export default router
