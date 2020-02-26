import {Question} from '../../database/models/question'
import Sequelize from 'sequelize';


const findbyid = async (id) => {
        return await Question.findByPk(id)
}
