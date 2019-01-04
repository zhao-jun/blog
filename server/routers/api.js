const apiRouter = require('koa-router')();
const blogController = require('../controller/blog');
// const apiRouter = new Router({ prefix: '/api' });

/**
 * 博客接口
 */
apiRouter
  .get('/blog/list', blogController.getBlogList)
  .get('/blog/detail', blogController.getBlogDetail);

module.exports = apiRouter;
