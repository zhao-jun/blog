import { getBlogList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    list: [],
    total: '',
    loading: true
  },
  mutations: {
    updateList(state, data) {
      state.list = data.blogList;
      state.total = data.total;
      state.loading = false;
    }
  },
  actions: {
    async getBlogList({ commit }, params) {
      let data = await getBlogList(params);
      commit('updateList', data);
    }
  }
};
