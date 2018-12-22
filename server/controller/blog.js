const response = require('../utils/response');
const list = require('../../blog/list.json');

exports.getBlogList = async ctx => {
  ctx.body = response.SUCCESS(list);
};

exports.getBlogDetail = async ctx => {
  let content = '# 标题';
  ctx.body = response.SUCCESS(content);
};
