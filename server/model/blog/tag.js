module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'tag',
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
      timestamps: true // 时间戳默认为true
    }
  );
};
