const response = require('../utils/response');
const list = require('../../blog/list.json');
const BlogService = require('../service/blog');

exports.getBlogList = async ctx => {
  let params = ctx.query;
  const data = await BlogService.getBlogList(params);
  ctx.body = response.SUCCESS(data);
};

exports.getBlogDetail = async ctx => {
  console.log(ctx.query, ctx.params, 'test');
  let param = ctx.query;
  if (param.id) {
    let data = await BlogService.getBlogDetail(param.id);
    ctx.body = response.SUCCESS(data);
  }
};
