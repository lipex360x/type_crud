import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CategoryShowService from './CategoryShowService'

export default class CategoryShowController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { props } = request.body

    const service = container.resolve(CategoryShowService)

    const categoryCreateService = await service.execute({ props })

    return response.json(categoryCreateService)
  }
}
