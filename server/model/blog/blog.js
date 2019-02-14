const moment = require('moment');
const marked = require('../../utils/md');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'blog',
    {
      // 博客ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      // code
      code: {
        type: DataTypes.UUID,
        defaultValue: function() {
          return ((Date.now() / 1000) | 0).toString(32);
        },
        // defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      // 博客标题
      title: {
        type: DataTypes.STRING,
        allowNull: false
        // unique: true
      },
      // 博客作者
      author: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // 博客介绍
      introduce: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // 博客分类
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // 博客封面
      banner: {
        type: DataTypes.STRING,
        allowNull: true
      },
      // 博客内容
      content: {
        type: DataTypes.TEXT,
        allowNull: false
        // get() {
        //   if (!this.getDataValue('content')) return;
        //   return marked(this.getDataValue('content'));
        // }
      },
      // 渲染之后的内容
      htmlContent: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      // 目录
      catalog: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      // 目录长度
      catalogLength: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      // 浏览次数
      browser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      createdAt: {
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD');
        }
      },
      updatedAt: {
        type: DataTypes.DATE
        // get() {
        //   return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD');
        // }
      }
    },
    {
      // 时间戳默认为true
      // timestamps: true,
      // 默认为 false, MySQL 创建的表名称会是复数 blogs
      // true 则表的名称和 model 相同，即 blog
      freezeTableName: true
    }
  );
};
