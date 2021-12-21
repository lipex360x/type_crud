import { inject, injectable } from 'tsyringe'
import AppError from '@shared/errors/AppError'

import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'

interface Request{
  id: string
}

@injectable()
export default class CategoryDeleteService {
  constructor(
    @inject('CategoryRepository')
    private repository: ICategoryRepository
  ) {}

  async execute({ id }: Request): Promise<void> {
    const getCategory = await this.repository.findById({ id })

    if (!getCategory) throw new AppError('Category not found')

    await this.repository.delete({ id })
  }
}
