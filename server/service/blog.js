const sequelize = require('../config/db');
const Sequelize = require('sequelize');
const BlogModel = sequelize.import('../model/blog/blog');
const CategoryModel = sequelize.import('../model/blog/category');
const { categoryList } = require('../config');

const Op = Sequelize.Op;
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
    const { page = 1, rows = 10, category, title, keyword } = params;
    let config = {
      limit: +rows, // 每页默认10条
      offset: (page - 1) * rows,
      order: [['id', 'DESC']],
      attributes: {
        exclude: [
          'id',
          'category',
          'content',
          'browser',
          'author',
          'banner',
          'updatedAt'
        ]
      }
    };
    // 模糊搜索
    if (keyword) {
      config.where = {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${keyword}%`
            }
          },
          {
            introduce: {
              [Op.like]: `%${keyword}%`
            }
          }
        ],
        [Op.and]: {
          category: {
            [Op.like]: `%${category == 0 ? '' : category}%`
          }
        }
      };
    } else if (+category) {
      // SELECT * FROM blogs WHERE FIND_IN_SET('1',category)
      // 0 则是全部
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
   * @param code  文章code
   * @returns {Promise<Model>}
   */
  static async getBlogDetail(code) {
    BlogModel.increment(['browser'], { by: 1, where: { code } });

    return await BlogModel.findOne({
      where: {
        code
      },
      attributes: {
        exclude: ['id', 'category', 'browser', 'author', 'banner', 'updatedAt']
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
