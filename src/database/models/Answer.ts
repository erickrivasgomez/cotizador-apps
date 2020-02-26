'use strict';
import { Table, Column, DataType, Model, BelongsTo, ForeignKey,PrimaryKey } from 'sequelize-typescript';
import { Question } from './Question';

@Table
export class Answer extends Model<Answer> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  content: string;

  @Column(DataType.STRING)
  path: string;

  @Column(DataType.STRING)
  value: string;

  @ForeignKey(() => Question)
  @Column
  questionId: number;

  @BelongsTo(() => Question)
  question: Question;


}
