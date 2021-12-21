import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryShowService from './CategoryShowService'

let fakecategoryRepository: FakeCategoryRepository
let categoryShowService: CategoryShowService

describe('Category Show', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryShowService = new CategoryShowService(fakecategoryRepository)
  })

  it('should be able to XXXXXXXXXXXXX', async () => {
    const categoryShow = await categoryShowService.execute()

    expect(categoryShow).toHaveProperty('XXXXXXXXXXXXX')
  })

  it('should not be able to XXXXXXXXXXXXX', async () => {
    await expect(
      categoryShowService.execute()
    ).rejects.toBeInstanceOf(AppError)
  })
})
