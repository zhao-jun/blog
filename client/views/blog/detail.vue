<template>
  <div class="blog-detail-container">
    <div class="blog-detail-content">
      <h1 class="markdown-title">{{ title }}</h1>
      <p class="markdown-date">发表于 {{ createdAt }}</p>
      <article class="markdown-body" v-html="compiledMarkdown"></article>
      <div class="markdown-end">
        <div class="qr-wel">
          <p>欢迎关注</p>
          <p>一同前行</p>
        </div>
        <img src="../../assets/images/qrcode.jpg" class="qr-img" alt="qr" />
      </div>
    </div>

    <el-card class="article-header article-header-fixed" shadow="hover">
      <div slot="header">目录</div>
      <div class="outer-scroll" :style="`height: ${catalogLength * 25}px`">
        <div class="inner-scroll">
          <ul
            class="article-header-index"
            v-if="catalog"
            v-html="catalog"
            :style="`height: ${catalogLength * 25}px`"
          ></ul>
        </div>
      </div>
    </el-card>
    <com-back-top />
  </div>
</template>

<script>
// 0.5.2 版本存在解析问题，目前暂用 0.3.19
// import marked from 'marked';
// import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
// 服务端直接渲染无法解析
// import 'github-markdown-css';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  'blog/detail'
);

export default {
  // 数据预取
  asyncData({ store, route }) {
    return store.dispatch('blog/detail/getBlogDetail', {
      code: route.params.code
    });
  },
  computed: {
    ...mapState([
      'title',
      'htmlContent',
      'catalog',
      'catalogLength',
      'createdAt',
      'loading'
    ]),
    compiledMarkdown() {
      return this.htmlContent;
    }
  },
  methods: {
    ...mapActions(['getBlogDetail'])
  },
  metaInfo() {
    const title = this.title ? this.title + ' - 阿夸漫谈' : '阿夸漫谈';
    return {
      title
    };
  }
};
</script>

<style lang="less">
// @import '../../../node_modules/github-markdown-css/github-markdown.css';
@import '../../assets/styles/wx.less';
.blog-detail-container {
  .blog-detail-content {
    width: 750px;
    padding: 30px;
    margin-top: 30px;
    box-sizing: border-box;
    background-color: #fff;
    margin-right: 280px;
    margin-bottom: 40px;
  }
  .markdown-title {
    margin: 0;
  }
  .markdown-date {
    text-align: center;
    font-size: 14px;
    color: #999;
  }
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 750px;
    h2,
    h3 {
      margin-top: -60px;
      padding-top: 60px;
    }
  }
  .markdown-end {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    .qr-wel {
      color: #999;
    }
    .qr-img {
      margin-left: 20px;
      width: 200px;
      // transition: all 0.3s ease-in-out;
    }
    // .qr-img:hover {
    //   margin-left: 40px;
    //   width: 180px;
    // }
  }
  .article-header {
    width: 250px;
    font-size: 14px;

    cursor: default;
    .el-card__header {
      // position: fixed;
      // width: 100%;
      font-weight: bold;
      padding: 8px 0;
      text-indent: 1em;
    }
    &.article-header-fixed {
      position: fixed;
      top: 90px;
      margin-left: 780px;
    }
    .outer-scroll,
    .article-header-index {
      width: 210px;
      height: 200px;
      max-height: calc(~'100vh - 360px');
    }
    .outer-scroll {
      position: relative;
      overflow: hidden;
    }
    .inner-scroll {
      position: absolute;
      left: 0;
      overflow-x: hidden;
      overflow-y: scroll;
    }
    .article-header-index {
      padding: 0;
      list-style: none;
      margin: 0;
      line-height: 1.8;
      /* for Chrome */
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 10px 15px 15px;
  }
}
</style>
