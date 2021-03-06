import { v4 as uuid } from 'uuid'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, {
  CreateProps,
  DeleteProps,
  FindByNameProps,
  FindByIdProps,
  UpdateProps
} from '../interfaces/ICategoryRepository'

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

  async delete({ id }: DeleteProps): Promise<void> {
    this.repository = this.repository.filter((category) => category.id !== id)
  }

  async findById({ id }: FindByIdProps): Promise<Category> {
    return this.repository.find((category) => category.id === id)
  }

  async update({ category }: UpdateProps): Promise<Category> {
    const getIndex = this.repository.findIndex((getCategory) => getCategory.id === category.id)

    this.repository[getIndex] = category

    return category
  }
}
