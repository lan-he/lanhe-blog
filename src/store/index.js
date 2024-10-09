import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@/store/rootReducer.js'
import storage from 'redux-persist/lib/storage' // 使用 localStorage
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

// redux-persist 配置
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['persist'], // 仅持久化 auth reducer
}

// 使用 persistReducer 包裹根 reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 创建 Redux store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
})

// 创建 persistor 用于管理持久化状态
export const persistor = persistStore(store)

export default store
