
import {Sequelize} from 'sequelize-typescript';
import { Answer } from '../../database/models/answer';
import { Question } from '../../database/models/question';
 
const sequelize =  new Sequelize({
        database: 'vmaDB',
        dialect: 'mssql',
        username: 'vmaDEV',
        port: 54321,
        password: '_Development01@',
        models: [Answer, Question], 
});
export { sequelize }