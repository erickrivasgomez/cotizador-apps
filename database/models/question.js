'use strict';

import answer from "./answer";

export default (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
   
    content: DataTypes.TEXT
  }, {});
  Question.associate = function(models) {
    // associations can be defined here
    Question.hasMany(answer); 
  };
  return Question;
};