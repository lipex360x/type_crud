import { Router } from 'express'

import categoryRoutes from '@modules/category/infra/http/routes/category.routes'

const routes = Router()

routes.get('/hello', (request, response) => {
  response.json({ hello: 'world' })
})

routes.use('/categories', categoryRoutes)

export default routes
