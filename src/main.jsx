import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import '@/assets/scss/index.scss'
import store, { persistor } from '@/store/index.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
