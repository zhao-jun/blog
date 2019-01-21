const Koa = require('koa');
const send = require('koa-send');
const path = require('path');
const render = require('koa-art-template');

// const apiRouter = require('./routers/api');
// const staticRouter = require('./routers/static');
// const renderRouter = require('./routers/render');
const routers = require('./routers');

const loggerMiddleware = require('./middleware/log');

const app = new Koa();

// 可以使用ejs等其他模版
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});

const isDev = process.env.NODE_ENV === 'development';

app.use(loggerMiddleware());

// favicon处理
app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    await send(ctx, ctx.path, { root: path.join(__dirname, '../') });
  } else {
    await next();
  }
});
// app.use(staticRouter.routes()).use(staticRouter.allowedMethods());
// app.use(apiRouter.routes()).use(apiRouter.allowedMethods());
// app.use(renderRouter.routes()).use(renderRouter.allowedMethods());
app.use(routers.routes()).use(routers.allowedMethods());

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3030;

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`);
});
