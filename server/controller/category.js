const response = require('../utils/response');
const CategoryService = require('../service/category');

exports.getCategoryList = async ctx => {
  let data = await CategoryService.getCategoryList();
  ctx.body = response.SUCCESS(data);
};
