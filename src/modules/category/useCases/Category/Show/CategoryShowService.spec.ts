import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryCreateService from '../Create/CategoryCreateService'
import CategoryShowService from './CategoryShowService'

let fakecategoryRepository: FakeCategoryRepository
let categoryCreateService: CategoryCreateService
let categoryShowService: CategoryShowService

describe('Category Show', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
    categoryShowService = new CategoryShowService(fakecategoryRepository)
  })

  it('should be able to show a category', async () => {
    const { id } = await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    const categoryShow = await categoryShowService.execute({ id })

    expect(categoryShow).toHaveProperty('name')
  })

  it('should not be able to show a invalid category', async () => {
    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    await expect(
      categoryShowService.execute({ id: 'fake_id' })
    ).rejects.toBeInstanceOf(AppError)
  })
})
