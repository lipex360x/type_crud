import { v4 as uuid } from 'uuid'

import Videos from '@modules/videos/infra/typeorm/entities/Videos'
import IVideosRepository, { CreateProps } from '../interfaces/IVideosRepository'

export default class FakeVideosRepository implements IVideosRepository {
  private repository: Videos[] = []

  async create ({ data }:CreateProps): Promise<Videos> {
    const entity_data = new Videos()

    Object.assign(entity_data, {
      // OBJECT_ID: uuid(),
      data,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(entity_data)

    return entity_data
  }
}
