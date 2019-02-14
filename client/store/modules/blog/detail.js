import { getBlogDetail } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    title: '',
    htmlContent: '',
    loading: true
  },
  mutations: {
    updateContent(state, res) {
      // TODO
      state.title = res && res.title;
      state.htmlContent = res && res.htmlContent;
      state.catalog = res && res.catalog;
      state.catalogLength = res && res.catalogLength;
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
