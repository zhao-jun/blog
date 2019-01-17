const sequelize = require('../config/db');
const BlogModel = sequelize.import('../model/blog/blog');
const CategoryModel = sequelize.import('../model/blog/category');
const { categoryList } = require('../config');

// 创建表
BlogModel.sync({ force: false, alter: true });

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
   * 获取博客列表
   */
  static async getBlogList(params) {
    const { page = 1, rows = 10, category, title } = params;
    let config = {
      limit: +rows, // 每页默认10条
      offset: (page - 1) * rows,
      order: [['id', 'DESC']],
      attributes: {
        exclude: [
          'category',
          'content',
          'browser',
          'author',
          'banner',
          'createdAt'
        ]
      }
    };
    // SELECT * FROM blogs WHERE FIND_IN_SET('1',category)
    // 0 则是全部
    if (+category) {
      config.where = sequelize.where(
        sequelize.fn('FIND_IN_SET', category, sequelize.col('category')),
        '>',
        0
      );
    }

    if (title) config.where = { title };
    let result = await BlogModel.findAndCountAll(config);
    return {
      total: result.count,
      blogList: result.rows
    };
  }

  /**
   * 获取博客详情
   * @param id  文章ID
   * @returns {Promise<Model>}
   */
  static async getBlogDetail(id) {
    BlogModel.increment(['browser'], { by: 1, where: { id } });

    return await BlogModel.findOne({
      where: {
        id
      },
      attributes: {
        exclude: ['id', 'category', 'browser', 'author', 'banner', 'createdAt']
      }
    });
  }

  /**
   * 获取标签列表
   */
  static async getCategoryList() {
    return await CategoryModel.findAll();
  }
};
