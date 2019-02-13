import createApp from './create-app';

export default context =>
  new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    // 路由跳转
    router.push(context.url);

    router.onReady(() => {
      // 获取匹配组件
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject(new Error('no component matched'));
      }
      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            // asyncData 参数
            return Component.asyncData({
              store,
              route: router.currentRoute
            });
          }
        })
      ).then(_ => {
        // 将已经渲染好的状态 store 放入上下文
        context.state = store.state;
        // 默认设置 title 为 router.currentRoute.meta.title
        // 动态 title 在 mixins 中处理
        // 也可以将所有 title 都防止 mixins 中处理
        if (router.currentRoute.meta.title)
          context.title = router.currentRoute.meta.title;
        resolve(app);
      });
    });
  });
