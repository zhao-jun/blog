<template>
  <div>
    <com-loading v-if="loading" />
    <h1>{{ title }}</h1>
    <article class="markdown-body" v-html="compiledMarkdown"></article>
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
      id: route.params.id
    });
  },
  mounted() {
    // TODO：修改title方式
    if (window) document.title = this.title;
  },
  computed: {
    ...mapState(['title', 'content', 'loading']),
    compiledMarkdown() {
      return this.content;
    }
  },
  methods: {
    ...mapActions(['getBlogDetail'])
  }
};
</script>

<style lang="less">
// @import '../../../node_modules/github-markdown-css/github-markdown.css';
@import '../../assets/styles/wx.less';
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 750px;
  margin: 0 auto;
  padding: 20px 45px 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 10px 15px 15px;
  }
}
</style>
