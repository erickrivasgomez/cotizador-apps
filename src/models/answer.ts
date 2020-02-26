import { Sequelize, Model } from "sequelize/types";

export default interface IAnswer{
    content: string,
    value: number,
    path: string
}

class Answer extends Model {}
Answer.init({
content: Sequelize.STRING,
path: Sequelize.TEXT
value: Sequelize.
}, { sequelize, modelName: 'answer' });

export {Answer}