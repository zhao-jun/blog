import { getBlogDetail } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    title: '',
    content: '',
    loading: true
  },
  mutations: {
    updateContent(state, res) {
      // TODO
      state.title = res && res.title;
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
