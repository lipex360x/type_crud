import { Router } from 'express'

import CategoryCreateController from '@modules/category/useCases/Category/Create/CategoryCreateController'
import CategoryIndexController from '@modules/category/useCases/Category/Index/CategoryIndexController'

const router = Router()

const categoryCreateController = new CategoryCreateController()
const categoryIndexController = new CategoryIndexController()

router.post('/', categoryCreateController.handle)
router.get('/', categoryIndexController.handle)

export default router
