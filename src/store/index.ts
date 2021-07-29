import { createStore } from 'vuex'
import todolist from './modules/todolist'
const store = createStore({
  modules: {
    todolist
  }
})
export default store
