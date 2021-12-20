import { v4 as uuid } from 'uuid'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, { CreateProps, FindByNameProps } from '../interfaces/ICategoryRepository'

export default class FakeCategoryRepository implements ICategoryRepository {
  private repository: Category[] = []

  async create({ name, description }:CreateProps): Promise<Category> {
    const category = new Category()

    Object.assign(category, {
      id: uuid(),
      name,
      description,
      created_at: new Date(),
      updated_at: new Date()
    })

    this.repository.push(category)

    return category
  }

  async findByName({ name }: FindByNameProps): Promise<Category> {
    const getCategory = this.repository.find((category) => category.name === name)

    return getCategory
  }

  async findAll(): Promise<Category[]> {
    return this.repository
  }
}
