'use strict';

import { Model } from "sequelize/types";
import Sequelize from 'sequelize';
import { Question } from "./question";
const sequelize = require('sequelize');

export class Answer extends Model {}
Answer.init({
  id: Sequelize.INTEGER,
  content: Sequelize.STRING,
  path: Sequelize.STRING,
  value: Sequelize.INTEGER
}, {sequelize,
  modelName: 'answer'
});

Answer.belongsTo(Question);

// module.exports = (sequelize, DataTypes) => {
//   const Answer = sequelize.define('Answer', {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue: DataTypes.UUIDV4,
//       allowNull: false,
//       autoIncrement: false,
//     },
//     content: DataTypes.STRING,
//     path: DataTypes.STRING,
//     value: DataTypes.INTEGER
//   });

//   Answer.associate = models => {
//     Answer.belongsTo(models.Question);
//   };

//   return Answer;
// };