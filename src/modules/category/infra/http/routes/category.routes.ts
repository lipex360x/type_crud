import { Router } from 'express'

import CategoryCreateController from '@modules/category/useCases/Category/Create/CategoryCreateController'
import CategoryIndexController from '@modules/category/useCases/Category/Index/CategoryIndexController'
import CategoryDeleteController from '@modules/category/useCases/Category/Delete/CategoryDeleteController'

const router = Router()

const categoryCreateController = new CategoryCreateController()
const categoryIndexController = new CategoryIndexController()
const categoryDeleteController = new CategoryDeleteController()

router.post('/', categoryCreateController.handle)
router.get('/', categoryIndexController.handle)
router.delete('/:id', categoryDeleteController.handle)

export default router
