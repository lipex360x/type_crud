import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CategoryDeleteService from './CategoryDeleteService'

export default class CategoryDeleteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const service = container.resolve(CategoryDeleteService)

    await service.execute({ id })

    return response.status(200)
  }
}
