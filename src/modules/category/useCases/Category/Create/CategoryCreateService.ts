import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

interface Request{
  name: string
  description: string
}

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute({ name, description }: Request): Promise<Category> {
    const getCategory = await this.repository.findByName({ name })

    if (getCategory) throw new AppError('User is already exists')

    const category = await this.repository.create({ name, description })

    return category
  }
}
