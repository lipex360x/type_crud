import { container } from 'tsyringe'

import ICategoryRepository from '@modules/category/repositories/interfaces/ICategoryRepository'
import CategoryRepository from '@modules/category/infra/typeorm/repositories/CategoryRepository'

const provider = {
  category: CategoryRepository
}

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  provider.category
)
