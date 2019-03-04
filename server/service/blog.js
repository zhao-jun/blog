const sequelize = require('../config/db');
const Sequelize = require('sequelize');
const BlogModel = sequelize.import('../model/blog/blog');
const CategoryModel = sequelize.import('../model/blog/category');
const { categoryList } = require('../config');
const marked = require('../utils/md');

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
   * 修改博客列表
   * @param data
   * @returns {Promise<*>}
   */
  static async updateBlog(data) {
    data.catalogLength = 0;
    data.catalog = '';
    data.htmlContent = marked(data.content)
      .replace(/(<a href="[^<>]*")(>)/g, function(match, $1, $2) {
        return `${$1} target="_blank"${$2}`;
      })
      .replace(
        /(<)(h[0-9])( id=")([^<>]*)(">)([^<>\u21B5\r\n]*)(<\/h[0-9]>)/g,
        function(match, $1, $2, $3, $4, $5, $6, $7) {
          data.catalogLength += 1;
          if ($2 === 'h2') {
            data.catalog += `<li><a href="#articleHeader${
              data.catalogLength
            }">${$6}</a></li>`;
          }
          if ($2 === 'h3') {
            data.catalog += `<ul><li><a href="#articleHeader${
              data.catalogLength
            }">${$6}</a></li></ul>`;
          }
          return (
            $1 + $2 + $3 + `articleHeader${data.catalogLength}` + $5 + $6 + $7
          );
        }
      );
    data.catalog = data.catalog.split('</ul><ul>').join('');
    return await BlogModel.update(
      {
        htmlContent: data.htmlContent,
        catalog: data.catalog,
        catalogLength: data.catalogLength
      },
      { where: { code: data.code } }
    );
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
    } else if (category) {
      // SELECT * FROM blogs WHERE FIND_IN_SET('1',category)
      // 0 则是全部
      // config.where = sequelize.where(
      //   sequelize.fn('FIND_IN_SET', category, sequelize.col('category')),
      //   '>',
      //   0
      // );
      config.where = {
        [Op.and]: []
      };
      category.split(',').map(i => {
        config.where[Op.and].push({
          category: sequelize.where(
            sequelize.fn('FIND_IN_SET', i, sequelize.col('category')),
            '>',
            0
          )
        });
      });
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
};
