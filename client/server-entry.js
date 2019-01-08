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
        // todo 存在问题：如果不存在 title 的时候要设置默认 title
        context.title = router.currentRoute.meta.title || 'Document';
        resolve(app);
      });
    });
  });
