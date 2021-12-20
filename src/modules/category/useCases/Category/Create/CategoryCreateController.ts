import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CategoryCreateService from '@modules/category/useCases/Category/Create/CategoryCreateService'

export default class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body

    const service = container.resolve(CategoryCreateService)

    const categoryCreateService = await service.execute({ name, description })

    return response.json(categoryCreateService)
  }
}
