
import { Sequelize } from 'sequelize-typescript';
import { Answer } from './models/Answer';
import { Question } from './models/Question';
 
const sequelize =  new Sequelize({
        host: '10.16.0.19',
        database: 'valuemyappdevdb',
        dialect: 'mssql',
        username: 'valuemyappdevdbusr',
        password: 'N7JB4qx.u9C+',
        models: [Answer, Question], 
});
export { sequelize }