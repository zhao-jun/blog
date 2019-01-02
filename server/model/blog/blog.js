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
      // 博客标题
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      // // 博客作者
      // author: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // // 博客介绍
      // introduce: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // // 博客分类
      // category: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // // 博客封面
      // banner: {
      //   type: DataTypes.STRING,
      //   allowNull: false
      // },
      // 博客内容
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      // 浏览次数
      browser: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      timestamps: true // 时间戳默认为true
    }
  );
};
