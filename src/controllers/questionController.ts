import questionRepository from '../repositories/questionRepository'
import { Router } from 'express'

export const questionController = Router()

questionController.get('/', async (req, res) => {
    
    const questions = await questionRepository.findAll()
    if (questions) {
        res.status(200).json({ questions })
    } else {
        res.status(400).json({ err : 'Bad Request'})
    }
})  