const response = require('../utils/response');
const BlogService = require('../service/blog');

exports.getBlogList = async ctx => {
  let params = ctx.query;
  const data = await BlogService.getBlogList(params);
  ctx.body = response.SUCCESS(data);
};

exports.getBlogDetail = async ctx => {
  let param = ctx.query;
  if (param.code) {
    let data = await BlogService.getBlogDetail(param.code);
    ctx.body = response.SUCCESS(data);
  }
};
