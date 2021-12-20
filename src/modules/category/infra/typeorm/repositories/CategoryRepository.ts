import { Repository, getRepository } from 'typeorm'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, { CreateProps } from '@modules/category/repositories/interfaces/ICategoryRepository'

export default class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>

  constructor () {
    this.repository = getRepository(Category)
  }

  async create ({ data }: CreateProps): Promise<Category> {
    //  TO DO
  }
}
