import { Repository, getRepository } from 'typeorm'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository, {
  CreateProps, DeleteProps, FindByIdProps, FindByNameProps, UpdateProps
} from '@modules/category/repositories/interfaces/ICategoryRepository'

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

  async findById({ id }: FindByIdProps): Promise<Category> {
    return this.repository.findOne(id)
  }

  async update({ category }: UpdateProps): Promise<Category> {
    const getCategory = await this.repository.findOne(category.id)

    getCategory.name = category.name
    getCategory.description = category.description

    await this.repository.save(getCategory)

    return getCategory
  }

  async delete({ id }: DeleteProps): Promise<void> {
    await this.repository.delete({ id })
  }
}
