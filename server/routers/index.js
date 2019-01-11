const router = require('koa-router')();
const backendRouter = require('./backend');
const renderRouter = require('./render');
const staticRouter = require('./static');

/**
 * 路由整合
 */
router.use('/backend', backendRouter.routes(), backendRouter.allowedMethods());
router.use('/public', staticRouter.routes(), staticRouter.allowedMethods());
router.use('/', renderRouter.routes(), renderRouter.allowedMethods());

module.exports = router;
