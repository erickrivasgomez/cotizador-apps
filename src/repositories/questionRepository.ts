import {Question} from '../../database/models/question'



const findAll = async () => {
        return await Question.findAll()
}
export default {
    findAll
}