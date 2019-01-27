<template>
  <div class="blog-list-container">
    <!-- <com-loading v-if="loading" /> -->
    <div class="blog-list-content">
      <el-card
        shadow="hover"
        v-for="item in list"
        :key="item.id"
        @click.native="detail(item)"
      >
        <div slot="header" class="clearfix">
          <div class="blog-header">
            <span class="blog-title">{{ item.title }}</span>
            <span class="blog-date">{{ item.updatedAt }}</span>
          </div>
        </div>
        <router-link :to="`${routes.blogDetail.pushPath}/${item.id}`">
          <div class="blog-summary">{{ item.introduce }}</div>
        </router-link>
      </el-card>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.page"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagination.rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import routes from '@/config/routes';
const blogVuex = createNamespacedHelpers('blog/list');
const categoryVuex = createNamespacedHelpers('blog/category');

export default {
  async asyncData({ store, route }) {
    await store.dispatch('blog/category/getCategoryList');
    await store.dispatch('blog/list/getBlogList', {
      category: route.meta.category
    });
  },
  data() {
    return {
      routes
    };
  },
  computed: {
    ...blogVuex.mapState(['list', 'total', 'loading', 'pagination']),
    ...categoryVuex.mapState(['category'])
  },
  methods: {
    ...blogVuex.mapActions(['getBlogList']),
    ...blogVuex.mapMutations([]),
    detail(item) {
      this.$router.push(`${routes.blogDetail.pushPath}/${item.id}`);
    },
    handleSizeChange(value) {
      this.getBlogList({ rows: value });
    },
    handleCurrentChange(value) {
      this.getBlogList({ page: value });
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  .blog-list-content {
    width: 750px;
  }
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
    height: 40px;
  }
  // 卡片
  .el-card + .el-card {
    margin-top: 10px;
  }
  // 底部分页
  .el-pagination {
    margin: 30px 0;
    text-align: center;
  }
}
</style>
