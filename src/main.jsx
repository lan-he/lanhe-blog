import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import '@/assets/scss/index.scss'
import { store, persistor } from '@/store/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ConfigProvider, theme } from 'antd'
import '@/assets/icon/iconfont.js'
// import { ThemeProvider, createTheme } from '@mui/material/styles'
// const THEME = createTheme({
//     typography: {
//         fontFamily: `'LXGW WenKai TC', cursive`,
//         fontWeightRegular: 600,
//     },
// })

createRoot(document.getElementById('root')).render(
    // <ThemeProvider theme={THEME}>
    // </ThemeProvider>
    <ConfigProvider
        theme={{
            algorithm: true ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
    >
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </ConfigProvider>
)
