const userStore = {
  namespaced: true,

  state: () => ({
    user:{}
  }),

  mutations: {
    loginUser(state, user) {
      state.user = user;
    }
  },
}

export default userStore