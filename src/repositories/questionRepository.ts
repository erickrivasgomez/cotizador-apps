import { Question } from '../database/models/Question'
import { Answer } from '../database/models/Answer'

const findAll = async () => {
    return await Question.findAll({
        include: [{model: Answer}]
    })
}
export default {
    findAll
}