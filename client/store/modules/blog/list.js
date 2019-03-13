import { getBlogList } from '@/service/blog';

export default {
  namespaced: true,
  state: {
    list: [],
    total: '',
    loading: true,
    pagination: {
      page: 1,
      rows: 10,
      category: [],
      title: '',
      keyword: ''
    }
  },
  mutations: {
    updateList(state, data) {
      state.list = data.blogList;
      state.total = data.total;
      state.loading = false;
    },
    updatePagination(state, pagination) {
      state.pagination = pagination;
    }
  },
  actions: {
    async getBlogList({ commit, state }, params) {
      // 搜索时重置页数
      if (!params.page && !params.rows) {
        params.page = 1;
        // params.rows = 10;
      }
      let pagination = Object.assign({}, state.pagination, params);
      commit('updatePagination', pagination);
      let data = await getBlogList(pagination);
      commit('updateList', data);
    }
  }
};
