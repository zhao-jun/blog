import { getCategoryList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    category: '',
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
