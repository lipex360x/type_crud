import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateCategoryService from '@modules/category/useCases/Category/Create/CategoryCreateService'

export default class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    const service = container.resolve(CreateCategoryService)

    const createCategoryService = await service.execute({ name, description })

    return response.json(createCategoryService)
  }
}
