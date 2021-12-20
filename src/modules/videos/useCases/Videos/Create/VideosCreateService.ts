import { inject, injectable } from 'tsyringe'
// import AppError from '@shared/errors/AppError'

import Videos from '@modules/videos/infra/typeorm/entities/Videos'
import IVideosRepository from '@modules/videos/repositories/interfaces/IVideosRepository'

interface Request{
  data: string
}

@injectable()
export default class CreateVideosService {
  constructor(
    @inject('VideosRepository')
    private repository: IVideosRepository
  ) {}

  async execute({ data }: Request): Promise<Videos> {
    // To Do
  }
}
