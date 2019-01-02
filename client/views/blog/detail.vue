<template>
  <div>
    <com-loading v-if="loading" />
    <article class="markdown-body" v-html="compiledMarkdown"></article>
  </div>
</template>

<script>
import marked from 'marked';
// 服务端直接渲染无法解析
// import 'github-markdown-css';
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers(
  'blog/detail'
);

const markedOptions = {
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  highlight: function(code, lang, callback) {
    return hljs.highlightAuto(code).value;
  }
};

export default {
  // 数据预取
  asyncData({ store, route }) {
    return store.dispatch('blog/detail/getBlogDetail', {
      id: route.params.id
    });
  },
  computed: {
    ...mapState(['content', 'loading']),
    compiledMarkdown() {
      if (!this.content) return '';
      return marked(this.content);
    }
  },
  methods: {
    ...mapActions(['getBlogDetail'])
  }
};
</script>

<style lang="less">
@import '../../../node_modules/github-markdown-css/github-markdown.css';
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
// pre {
//   position: relative;
// }

// pre code {
//   display: block;
//   max-height: 600px;
//   margin: 0;
//   padding: 60px 20px 20px;
//   border-radius: 8px 8px 5px 5px;
//   font-family: Monaco, Menlo, Consolas, Courier New, monospace;
//   line-height: 1.4;
//   background-color: rgb(39, 40, 34);
//   color: #ccc;
//   overflow: auto;
//   &::before {
//     content: attr(class);
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     color: #fff;
//     height: 38px;
//     line-height: 38px;
//     font-size: 16px;
//     border-radius: 5px 5px 0 0;
//     background-image: linear-gradient(#e8e7e8, #d3d2d3);
//     font-family: 'Source Sans Pro', sans-serif;
//     font-weight: 700;
//     text-indent: 95px;
//   }
//   &::after {
//     content: ' ';
//     position: absolute;
//     border-radius: 50%;
//     background: #fc625d;
//     width: 12px;
//     height: 12px;
//     top: 0;
//     left: 20px;
//     margin-top: 13px;
//     box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
//   }
// }

// .article-title,
// h1 {
//   text-align: center;
//   font-size: 26px;
//   font-weight: 700;
//   line-height: 2;
//   margin-bottom: 2em;
// }

// .article-container {
//   border-radius: 5px;
//   padding: 50px 0;
//   background-color: #fff;
//   width: auto;
//   word-break: break-word;
// }

// .article-container img,
// pre {
//   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
//   max-width: 100%;
//   transition: box-shadow 0.3s ease;
//   &:hover {
//     box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
//   }
// }

// .article-container img {
//   margin: 10px;
// }

// @media (max-width: 768px) {
//   .article-container {
//     font-size: 1em;
//     line-height: 1.6em;
//   }
// }
</style>
