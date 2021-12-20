import { v4 as uuid } from 'uuid'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, { CreateProps } from '../interfaces/ICategoryRepository'

export default class FakeCategoryRepository implements ICategoryRepository {
  private repository: Category[] = []

  async create ({ data }:CreateProps): Promise<Category> {
    const entity_data = new Category()

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
