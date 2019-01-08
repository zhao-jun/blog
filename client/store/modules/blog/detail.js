import { getBlogDetail } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    content: '',
    loading: true
  },
  mutations: {
    updateContent(state, res) {
      // TODO
      state.content = res && res.content;
      state.loading = false;
    }
  },
  actions: {
    async getBlogDetail({ commit, state }, params) {
      let res = await getBlogDetail(params);
      commit('updateContent', res);
    }
  }
};
