<template>
  <div class="blog-list-container">
    <!-- <com-loading v-if="loading" /> -->
    <div class="blog-list-content">
      <el-card
        shadow="hover"
        v-for="item in list"
        :key="item.code"
        @click.native="detail(item)"
      >
        <div slot="header" class="clearfix">
          <div class="blog-header">
            <span class="blog-title">{{ item.title }}</span>
            <span class="blog-date">发表于 {{ item.createdAt }}</span>
          </div>
        </div>
        <router-link :to="`${routes.blogDetail.pushPath}/${item.code}`">
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
    <div class="blog-list-aside">
      <com-search />
      <com-tag :category="category" @choseCategory="choseCategory" />
    </div>
    <com-back-top />
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
      // category: route.meta.category
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
    ...categoryVuex.mapMutations(['updateCategory']),
    detail(item) {
      this.$router.push(`${routes.blogDetail.pushPath}/${item.code}`);
    },
    handleSizeChange(value) {
      this.getBlogList({ rows: value });
    },
    handleCurrentChange(value) {
      this.getBlogList({ page: value });
    },
    choseCategory(idArr, newCategory) {
      this.updateCategory(newCategory);
      // 不能传数组，category[]
      this.getBlogList({ category: idArr.join(',') });
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
  padding-top: 30px;
  // 是否悬浮控制
  display: flex;
  .blog-list-content {
    width: 750px;
    // margin-right: 280px;
    margin-right: 30px;
  }
  // 是否悬浮控制
  .blog-list-aside {
    // position: fixed;
    // top: 90px;
    // margin-left: 780px;
  }
  .blog-header {
    display: flex;
    justify-content: space-between;
  }
  .blog-title {
    font-weight: bold;
  }
  .blog-date {
    font-size: 14px;
    color: #a1a1a1;
  }
  .blog-summary {
    color: #6f6f6f;
    font-size: 14px;
    line-height: 2;
  }
  // 卡片
  .el-card + .el-card {
    margin-top: 24px;
  }
  // 底部分页
  .el-pagination {
    margin: 30px 0;
    text-align: center;
  }
}
</style>
