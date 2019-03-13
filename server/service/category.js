const sequelize = require('../config/db');
const CategoryModel = sequelize.import('../model/blog/category');
const { categoryList } = require('../config');

// 创建表
// CategoryModel.sync({ force: true, alter: true }).then(() => {
//   return CategoryModel.bulkCreate(categoryList);
// });
CategoryModel.sync({ force: false, alter: true });

module.exports = class CategoryService {
  /**
   * 创建标签
   * @param data
   * @returns {Promise<*>}
   */
  static async createCategory(data) {
    return await CategoryModel.create({
      name: data.name
    });
  }

  /**
   * 获取标签列表
   */
  static async getCategoryList() {
    return await CategoryModel.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
  }
};
