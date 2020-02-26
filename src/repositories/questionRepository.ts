import Question from '../../database/models/question'
import db from '../config/database';
import Gig from '../models/Gig';
import Sequelize from 'sequelize';

const Op = Sequelize.Op;


const findbyid = async (id) => {
    return await Question.find
}

Question.findByPk(id).then(question => {})