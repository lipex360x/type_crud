// snippet: routerTemplate
import { Router } from 'express'

import CreateCategoryController from '@modules/category/useCases/Category/Create/CategoryCreateController'

const router = Router()

const createCategoryController = new CreateCategoryController()

router.post('/', createCategoryController.handle)

export default router
