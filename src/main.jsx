import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import '@/assets/scss/index.scss'
import store, { persistor } from '@/store/index.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
const THEME = createTheme({
    typography: {
        fontFamily: `'LXGW WenKai TC', cursive`,
        fontWeightRegular: 600,
    },
})

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={THEME}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </ThemeProvider>
)
