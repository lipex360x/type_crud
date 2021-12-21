import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CategoryUpdateService from './CategoryUpdateService'

export default class CategoryUpdateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const { name, description } = request.body

    const service = container.resolve(CategoryUpdateService)

    const categoryCreateService = await service.execute({ id, name, description })

    return response.json(categoryCreateService)
  }
}
