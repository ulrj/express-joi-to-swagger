import express from 'express'
import validationMiddleware from '../../middlewares/validationMiddleware'
import * as getAnimals from './get.animals'
import * as postAnimal from './post.animal'

const router = express.Router()

export default () => {
	router.get('/',
		validationMiddleware(getAnimals.requestSchema),
		getAnimals.businessLogic)

	router.post('/',
		validationMiddleware(postAnimal.requestSchema),
		postAnimal.businessLogic)

	return router
}
