import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import App from '@/App.jsx'
import Home from '@/views/home.jsx'
const TicTacToe = lazy(() => import('@/views/tic-tac-toe.jsx'))
const ToimgDesign = lazy(() => import('@/views/toimg-design.jsx'))

export default function Router() {
    return (
        <BrowserRouter>
            <Suspense fallback={<Spin delay={1000} />}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="tic-tac-toe" element={<TicTacToe />} />
                        <Route path="toimg-design" element={<ToimgDesign />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}
