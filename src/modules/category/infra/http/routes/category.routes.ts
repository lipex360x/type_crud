import { Router } from 'express'

import CreateCategoryController from '@modules/category/useCases/Category/Create/CategoryCreateController'
import CategoryIndexController from '@modules/category/useCases/Category/Index/CategoryIndexController'

const router = Router()

const categoryCreateController = new CreateCategoryController()
const categoryIndexController = new CategoryIndexController()

router.post('/', categoryCreateController.handle)
router.get('/', categoryIndexController.handle)

export default router
