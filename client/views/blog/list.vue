<template>
  <div class="blog-list-container">
    <com-loading v-if="loading" />
    <el-card
      class="box-card"
      shadow="hover"
      v-for="o in 3"
      :key="o"
      @click.native="detail"
    >
      <div slot="header" class="clearfix">
        <div class="blog-header">
          <span class="blog-title">文章标题</span>
          <span class="blog-date">2018-12-20</span>
        </div>
      </div>
      <div v-for="o in 3" :key="o" class="blog-summary">
        {{
          '文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容文章内容' +
            o
        }}
      </div>
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
  asyncData({ store, router }) {
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
    detail() {
      this.$router.push(routes.blogDetail.path);
    }
  }
};
</script>

<style lang="less" scoped>
.blog-list-container {
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
  .el-card {
    margin-top: 30px;
    cursor: pointer;
  }
}
</style>
