import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

interface Request{
  id: string
  name?: string
  description?: string
}

@injectable()
export default class CategoryUpdateService {
  constructor(
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute({ id, name, description }: Request): Promise<Category> {
    const getCategoryById = await this.repository.findById({ id })

    if (!getCategoryById) throw new AppError('Category not found')

    const getCategoryByName = await this.repository.findByName({ name })

    if (getCategoryByName) throw new AppError('Category is already exists')

    getCategoryById.name = name || getCategoryById.name
    getCategoryById.description = description || getCategoryById.description

    return this.repository.update({ category: getCategoryById })
  }
}
