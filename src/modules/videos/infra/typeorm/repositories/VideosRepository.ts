import { Repository, getRepository } from 'typeorm'

import Videos from '@modules/videos/infra/typeorm/entities/Videos'
import IVideosRepository, { CreateProps } from '@modules/videos/repositories/interfaces/IVideosRepository'

export default class VideosRepository implements IVideosRepository {
  private repository: Repository<Videos>

  constructor () {
    this.repository = getRepository(Videos)
  }

  async create ({ data }: CreateProps): Promise<Videos> {
    //  TO DO
  }
}
