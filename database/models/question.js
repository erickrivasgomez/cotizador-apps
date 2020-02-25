'use strict';

import answer from "./answer";

export default (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    id: DataTypes.UUID,
    content: DataTypes.TEXT
  }, {});
  Question.associate = function(models) {
    Question.hasMany(answer); 
    // associations can be defined here
  };
  return Question;
};