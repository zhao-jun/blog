export default {
  namespaced: true,
  state: {
    /**
     * 页面高度
     * @type {string}
     */
    historyScrollTop: {}
  },
  mutations: {
    // updateCategory(state, res) {
    //   state.content = res;
    //   state.loading = false;
    // }
    saveScrollTop(state, { path, scrollTop }) {
      state.historyScrollTop[path] = scrollTop;
    }
  },
  actions: {
    saveScrollTop({ commit }, { path, scrollTop }) {
      commit('saveScrollTop', { path, scrollTop });
    }
    // async getCategoryList({ commit, state }) {
    //   let res = await getCategoryList();
    //   commit('updateCategory', res);
    // }
  }
};
