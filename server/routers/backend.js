const backendRouter = require('koa-router')();
const blogController = require('../controller/blog');
const categoryController = require('../controller/category');
// const backendRouter = new Router({ prefix: '/backend' });

/**
 * 博客接口
 */
backendRouter
  .get('/blog/list', blogController.getBlogList)
  .get('/blog/detail', blogController.getBlogDetail)
  .get('/category/list', categoryController.getCategoryList);

module.exports = backendRouter;
