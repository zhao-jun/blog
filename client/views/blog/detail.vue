<template>
  <div class="blog-detail-container">
    <h1 class="markdown-title">{{ title }}</h1>
    <article class="markdown-body" v-html="compiledMarkdown"></article>
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

// marked.setOptions({
//   renderer: new marked.Renderer(),
//   gfm: true,
//   tables: true,
//   breaks: true,
//   pedantic: true,
//   sanitize: true,
//   smartLists: true,
//   smartypants: true,
//   langPrefix: 'hljs ',
//   // highlight: function(code) {
//   //   return hljs.highlightAuto(code).value;
//   // }
//   highlight: function(code) {
//     return `<ul>${hljs
//       .highlightAuto(code)
//       .value.split('\n')
//       .map(i => `<li>${i}</li>`)
//       .join('')}</ul>`;
//   }
// });

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
  .markdown-title {
    margin-right: 280px;
  }
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 750px;
    margin-right: 280px;
    padding: 20px 0 45px;
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
