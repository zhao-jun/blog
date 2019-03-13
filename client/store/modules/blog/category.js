import { getCategoryList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    /**
     * 标签目录
     * @type {array}
     */
    category: [],
    /**
     * 开发环境loading
     * @type {boolean}
     */
    loading: true
  },
  mutations: {
    updateCategory(state, res) {
      state.category = res;
      state.loading = false;
    }
  },
  actions: {
    async getCategoryList({ commit, state }) {
      // 如果存在就不再获取 category
      if (state.category.length) return;
      let res = await getCategoryList();
      commit('updateCategory', res);
    }
  }
};
