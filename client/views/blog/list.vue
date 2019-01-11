<template>
  <div class="blog-list-container">
    <com-loading v-if="loading" />
    <el-card
      shadow="hover"
      v-for="item in list"
      :key="item.id"
      @click.native="detail(item)"
    >
      <div slot="header" class="clearfix">
        <div class="blog-header">
          <span class="blog-title">{{ item.title }}</span>
          <span class="blog-date">{{ item.createdAt }}</span>
        </div>
      </div>
      <div class="blog-summary">{{ item.introduce }}</div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import routes from '@/config/routes';
const blogVuex = createNamespacedHelpers('blog/list');
const categoryVuex = createNamespacedHelpers('blog/category');

export default {
  asyncData({ store, route }) {
    store.dispatch('blog/list/getBlogList', {
      category: route.meta.category
    });
    store.dispatch('blog/category/getCategoryList');
  },
  computed: {
    ...blogVuex.mapState(['list', 'total', 'loading']),
    ...categoryVuex.mapState(['category'])
  },
  mounted() {},
  methods: {
    // ...blogVuex.mapMutations(['updateText']),
    // ...blogVuex.mapActions(['getBlogList']),
    detail(item) {
      this.$router.push(`${routes.blogDetail.pushPath}/${item.id}`);
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
  padding-top: 30px;
  .blog-header {
    display: flex;
    justify-content: space-between;
  }
  .blog-title {
    font-weight: bold;
  }
  .blog-date {
    color: #ccc;
  }
  .blog-summary {
    color: #ccc;
    font-size: 14px;
    line-height: 1.5;
  }
  .el-card + .el-card {
    margin-top: 10px;
  }
  .el-card {
    cursor: pointer;
  }
}
</style>
