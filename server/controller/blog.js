const response = require('../utils/response');
const list = require('../../blog/list.json');
const BlogService = require('../service/blog');

exports.getBlogList = async ctx => {
  ctx.body = response.SUCCESS(list);
};

exports.getBlogDetail = async ctx => {
  let param = ctx.query;
  if (param.id) {
    let data = await BlogService.getBlogDetail(param.id);
    ctx.body = response.SUCCESS(data);
  }
};
