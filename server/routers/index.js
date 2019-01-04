const router = require('koa-router')();
const apiRouter = require('./api');
const renderRouter = require('./render');
const staticRouter = require('./static');

/**
 * 路由整合
 */
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
router.use('/public', staticRouter.routes(), staticRouter.allowedMethods());
router.use('/', renderRouter.routes(), renderRouter.allowedMethods());

module.exports = router;
