import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CategoryShowService from './CategoryShowService'

export default class CategoryShowController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const service = container.resolve(CategoryShowService)

    const categoryCreateService = await service.execute({ id })

    return response.json(categoryCreateService)
  }
}
