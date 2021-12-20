import { inject, injectable } from 'tsyringe'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

@injectable()
export default class CategoryIndexService {
  constructor(
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const getCategories = await this.repository.findAll()

    return getCategories
  }
}
