import { Request, Response } from 'express'
import { container } from 'tsyringe'

import categoryIndexService from '@modules/category/useCases/Category/Index/CategoryIndexService'

export default class CategoryIndexController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = container.resolve(categoryIndexService)

    const serviceFunction = await service.execute()

    return response.json(serviceFunction)
  }
}
