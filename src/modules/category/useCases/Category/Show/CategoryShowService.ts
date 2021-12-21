import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

interface Request{
  id: string
}

@injectable()
export default class CategoryShowService {
  constructor(
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute({ id }: Request): Promise<Category> {
    const getCategory = await this.repository.findById({ id })

    if (!getCategory) throw new AppError('Category not found')

    return getCategory
  }
}
