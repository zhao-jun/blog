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
          <span class="blog-date">{{ item.date }}</span>
        </div>
      </div>
      <div class="blog-summary">{{ item.summary }}</div>
    </el-card>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import routes from '@/config/routes';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  'blog/list'
);

export default {
  asyncData({ store, route }) {
    return store.dispatch('blog/list/getBlogList');
  },
  computed: {
    ...mapState(['list', 'loading'])
  },
  mounted() {
    // this.getHomeList()
  },
  methods: {
    // ...mapMutations(['updateText']),
    ...mapActions(['getHomeList']),
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
