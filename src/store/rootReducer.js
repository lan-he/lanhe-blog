import { combineReducers } from 'redux'
import persistReducer from '@/store/persistReducer.js'
import indexReducer from '@/store/indexReducer.js'

const rootReducer = combineReducers({
    persist: persistReducer,
    index: indexReducer, // 不持久化 settings
})

export default rootReducer
