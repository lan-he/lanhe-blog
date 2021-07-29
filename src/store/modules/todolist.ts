export interface State {
  items: Array<any>
}
export interface Product {
  id: number
}
const state = () => ({
  items: [1, 2, 1]
})

// getters
const getters = {
  cartTotalPrice: (state: any) => {
    return state.items
  }
}

// actions
const actions = {
  addProductToCart({ commit }: { commit: any }, product: Product): void {
    commit('pushProductToCart', { id: product.id })
  }
}

// mutations
const mutations = {
  pushProductToCart(state: State, { id }: { id: number }): void {
    state.items.push({
      id,
      quantity: 1
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
