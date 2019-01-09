module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'category',
    {
      // 标签ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      // 标签
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      // 时间戳默认为true
      timestamps: true,
      // 默认为 false, MySQL 创建的表名称会是复数 categories
      // true 则表的名称和 model 相同，即 category
      freezeTableName: true
    }
  );
};
