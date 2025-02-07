// app/store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '@/store/userSlice.js'
import indexReducer from '@/store/indexSlice.js'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
// 配置持久化
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'], // 只持久化 user slice
}

const rootReducer = combineReducers({
    user: userReducer,
    index: indexReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST'], // 忽略 redux-persist 的 action
            },
        }),
})

export const persistor = persistStore(store)
