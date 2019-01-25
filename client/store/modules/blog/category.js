import { getCategoryList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    /**
     * 目录
     * @type {string}
     */
    category: '',
    /**
     * 开发环境loading
     * @type {boolean}
     */
    loading: true
  },
  mutations: {
    updateCategory(state, res) {
      state.content = res;
      state.loading = false;
    }
  },
  actions: {
    async getCategoryList({ commit, state }) {
      let res = await getCategoryList();
      commit('updateCategory', res);
    }
  }
};
