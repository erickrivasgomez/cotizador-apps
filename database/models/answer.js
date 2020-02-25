'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      autoIncrement: false,
    },
    content: DataTypes.STRING,
    path: DataTypes.STRING,
    value: DataTypes.INTEGER
  });

  Answer.associate = models => {
    Answer.belongsTo(models.Question);
  };

  return Answer;
};