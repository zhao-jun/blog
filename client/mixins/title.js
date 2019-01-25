function getTitle(vm) {
  // 组件可以提供一个 `title` 选项
  // 此选项可以是一个字符串或函数
  const { metaInfo } = vm.$options;
  if (metaInfo) {
    return typeof metaInfo === 'function' ? metaInfo.call(vm) : metaInfo;
  }
}

const serverTitleMixin = {
  created() {
    const metaInfo = getTitle(this);
    // 默认采用路由 meta 定义的 title
    // 有定义 metaInfo, 就采用 metaInfo 中的 title
    if (metaInfo && metaInfo.title) {
      this.$ssrContext.title = metaInfo.title;
    }
  }
};

const clientTitleMixin = {
  mounted() {
    const metaInfo = getTitle(this);
    if (metaInfo && metaInfo.title) {
      document.title = metaInfo.title;
    }
  }
};

// 可以通过 `webpack.DefinePlugin` 注入 `VUE_ENV`
export default (process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin);
