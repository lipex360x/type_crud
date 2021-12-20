// snippet: routerTemplate
import { Router } from 'express'

import CreateVideosController from '@modules/videos/useCases/Videos/Create/VideosCreateController'

const router = Router()

const createVideosController = new CreateVideosController()

router.post('/', createVideosController.create)

export default router
