// snippet: controllerTemplate
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateCategoryService from '@modules/category/useCases/Category/Create/CategoryCreateService'

export default class CreateCategoryController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { props } = request.body

    const service = container.resolve(CreateCategoryService)

    const createCategoryService = await service.execute({ props })

    return response.json(classToClass(createCategoryService))
  }
}
