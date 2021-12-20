import { Repository, getRepository } from 'typeorm'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, { CreateProps, FindByNameProps } from '@modules/category/repositories/interfaces/ICategoryRepository'

export default class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: CreateProps): Promise<Category> {
    const category = this.repository.create({ name, description })

    await this.repository.save(category)

    return category
  }

  async findByName({ name }: FindByNameProps): Promise<Category> {
    return this.repository.findOne({ name })
  }

  async findAll(): Promise<Category[]> {
    return this.repository.find()
  }
}
