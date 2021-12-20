// snippet: controllerTemplate
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateVideosService from '@modules/videos/useCases/Videos/Create/VideosCreateService'

export default class CreateVideosController {
  async handle (request: Request, response: Response): Promise<Response> {
    const { props } = request.body

    const service = container.resolve(CreateVideosService)

    const createVideosService = await service.execute({ props })

    return response.json(classToClass(createVideosService))
  }
}
