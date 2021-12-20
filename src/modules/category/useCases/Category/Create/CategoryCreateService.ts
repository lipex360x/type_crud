import { inject, injectable } from 'tsyringe'
// import AppError from '@shared/errors/AppError'

import Category from '@modules/category/infra/typeorm/entities/Category'
import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

interface Request{
  data: string
}

@injectable()
export default class CreateCategoryService {
  constructor (
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute ({ data }: Request): Promise<Category> {
    // To Do
  }
}
