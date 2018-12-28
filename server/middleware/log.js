const fs = require('fs');
const path = require('path');

module.exports = options => async (ctx, next) => {
  const startTime = Date.now();
  const requestTime = new Date();
  await next();
  const ms = Date.now() - startTime;
  let logout = `${ctx.request.ip} -- ${requestTime} -- ${ctx.method} -- ${
    ctx.url
  } -- ${ms}ms`;
  // 输出日志文件
  fs.appendFileSync(path.join(__dirname, 'log.txt'), logout + '\n');
};
