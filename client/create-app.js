import Vue from 'vue';
import App from './app.vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import './assets/styles/index.less';
import './components/common';
import createRouter from './config/router';
import createStore from './store/store';
import { Menu, MenuItem, Submenu, Card } from 'element-ui';
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Submenu.name, Submenu);
Vue.component(Card.name, Card);
// element-ui文档补充，部分组件正确引入方式
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
// Vue.use(Loading.directive);
// Vue.prototype.$loading = Loading.service;

// 避免状态单例
// 导出一个工厂函数，用于创建新的应用程序、router 和 store 实例
Vue.use(VueRouter);
Vue.use(Vuex);
// 客户端数据预取
// 存在问题：每次服务端渲染好后进入还会重新再请求一遍
// 存在问题：路由组件重用还需要全局Vue.mixin
// if (process.env.VUE_ENV !== 'server') {
//   Vue.mixin({
//     beforeMount () {
//       const { asyncData } = this.$options
//       if (asyncData) {
//         // 将获取数据操作分配给 promise
//         // 以便在组件中，我们可以在数据准备就绪后
//         // 通过运行 `this.dataPromise.then(...)` 来执行其他任务
//         this.dataPromise = asyncData({
//           store: this.$store,
//           route: this.$route
//         })
//       }
//     }
//   })
// }
// function a () {
//   document.title = '123'
// }
// 解决路由组件重用asyncData执行问题
Vue.mixin({
  beforeRouteUpdate(to, from, next) {
    const { asyncData } = this.$options;
    if (asyncData) {
      asyncData({
        store: this.$store,
        route: to
      })
        .then(next)
        .catch(next);
    } else {
      next();
    }
  },
  // todo title修改
  beforeRouteEnter(to, from, next) {
    /* 路由发生变化修改页面title */
    if (!to.meta.title) next();
    if (process.env.VUE_ENV === 'server') {
    } else {
      document.title = to.meta.title;
    }
    next();
  }
});

export default () => {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router, store };
};
