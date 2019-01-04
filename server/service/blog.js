const sequelize = require('../config/db');
const BlogModel = sequelize.import('../model/blog/blog');
const TagModel = sequelize.import('../model/blog/tag');

// 创建表
BlogModel.sync({ force: false, alter: true });
TagModel.sync({ force: false, alter: true });

module.exports = class BlogService {
  /**
   * 创建博客
   * @param data
   * @returns {Promise<*>}
   */
  static async createBlog(data) {
    return await BlogModel.create({
      title: data.title,
      author: data.author,
      introduce: data.introduce,
      category: data.category,
      banner: data.banner,
      content: data.content
    });
  }
  /**
   * 创建标签
   * @param data
   * @returns {Promise<*>}
   */
  static async createTag(data) {
    return await TagModel.create({
      name: data.name
    });
  }

  /**
   * 获取博客详情
   * @param id  文章ID
   * @returns {Promise<Model>}
   */
  static async getBlogDetail(id) {
    return await BlogModel.findOne({
      where: {
        id
      }
    });
  }
};
