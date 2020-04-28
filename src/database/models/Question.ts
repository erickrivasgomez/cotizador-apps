'use strict';
import {Table, Column, Model, HasMany, PrimaryKey, DataType} from 'sequelize-typescript';
import { Answer } from './Answer';
@Table
export class Question extends Model<Question> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  content: string;
 
  @HasMany(() => Answer)
  answers: Answer[];
}





