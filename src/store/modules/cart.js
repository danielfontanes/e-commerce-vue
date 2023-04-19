const cartStore = {
  namespaced: true,

  state: {
    cart:[]
  },

  getters: {
    totalProductsInCart: (state) => {
      return state.cart.reduce((total, product) => {
        return total + product.quantity;
      }, 0);
    },
  },
  mutations: {
    addProduct(state, product) {
      const cartItemIndex = state.cart.findIndex(
        (item) => item.id === product.id
      );

      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].quantity += 1;
      } else {
        const cartItem = { ...product, quantity: 1 };
        state.cart.push(cartItem);
      }
    },
    incrementProduct(state, product) {
      const cartItemIndex = state.cart.findIndex((item) => item.id === product.id);
  
      if (cartItemIndex !== -1) {
        state.cart[cartItemIndex].quantity += 1;
      }
    },
    decrementProduct(state, product) {
      const cartItemIndex = state.cart.findIndex((item) => item.id === product.id);
  
      if (cartItemIndex !== -1) {
        const quantity = state.cart[cartItemIndex].quantity;
  
        if (quantity > 1) {
          state.cart[cartItemIndex].quantity -= 1;
        } else {
          state.cart.splice(cartItemIndex, 1);
        }
      }
    },
    removeProduct(state, product) {
      const cartItemIndex = state.cart.findIndex((item) => item.id === product.id);
  
      if (cartItemIndex !== -1) {
        state.cart.splice(cartItemIndex, 1);
      }
    },
  }
}

export default cartStore