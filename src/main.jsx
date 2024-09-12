import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import '@/assets/scss/index.scss'

createRoot(document.getElementById('root')).render(<App />)
