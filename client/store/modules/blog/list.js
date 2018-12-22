import { getBlogList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    list: [],
    loading: true
  },
  mutations: {
    updateList(state, list) {
      state.list = list;
      state.loading = false;
    }
  },
  actions: {
    async getBlogList({ commit }) {
      let data = await getBlogList();
      commit('updateList', data);
    }
  }
};
