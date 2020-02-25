'use strict';

import question from "./question";

export default (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id: DataTypes.UUID,
    content: DataTypes.TEXT,
    path: DataTypes.TEXT,
    value: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
   // Will add userId to Task model
    Answer.belongsTo(question);
    // associations can be defined here
  };
  return Answer;
};