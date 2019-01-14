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
      category: '',
      title: ''
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
    // handleCurrentChange(state, value) {
    //   console.log(value);
    // }
  },
  actions: {
    async getBlogList({ commit, state }, params) {
      let pagination = Object.assign({}, state.pagination, params);
      commit('updatePagination', pagination);
      let data = await getBlogList(pagination);
      commit('updateList', data);
    }
  }
};
