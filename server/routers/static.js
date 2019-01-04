const staticRouter = require('koa-router')();
const send = require('koa-send');
const path = require('path');
// const staticRouter = new Router({ prefix: '/public' });

/**
 * 静态资源路由
 */
staticRouter.get('*', async ctx => {
  await send(ctx, ctx.path, {
    root: path.join(__dirname, '../../client-dist')
  });
});

module.exports = staticRouter;
