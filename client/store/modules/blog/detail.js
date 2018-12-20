import { getBlogDetail } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    content: '',
    loading: true
  },
  mutations: {
    updateContent(state, content) {
      state.content = content;
      state.loading = false;
    }
  },
  actions: {
    async getBlogDetail({ commit, state }, params) {
      let content = await getBlogDetail(params);
      commit('updateContent', content);
    }
  }
};
