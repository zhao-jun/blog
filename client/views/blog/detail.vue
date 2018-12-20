<template>
  <div>
    <com-loading v-if="loading" />
    <article v-html="compiledMarkdown"></article>
  </div>
</template>

<script>
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
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
  computed: {
    ...mapState(['content', 'loading']),
    compiledMarkdown() {
      if (!this.content) return '';
      return marked(this.content, markedOptions);
    }
  },
  asyncData({ store, router }) {
    return store.dispatch('blog/detail/getBlogDetail', { param: 'detail' });
  },
  methods: {
    ...mapActions(['getBlogDetail'])
  }
};
</script>
