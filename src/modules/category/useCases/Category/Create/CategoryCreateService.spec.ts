import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryCreateService from './CategoryCreateService'

let fakecategoryRepository: FakeCategoryRepository
let categoryCreateService: CategoryCreateService

describe('Category', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
  })

  it('should be able to create a new category', async () => {
    const name = Faker.name.firstName()
    const description = Faker.lorem.words(3)
    const category = await categoryCreateService.execute({ name, description })

    expect(category).toHaveProperty('id')
  })

  it('should not able to create a duplicate category', async () => {
    const category = {
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    }

    await categoryCreateService.execute(category)

    await expect(categoryCreateService.execute(category)).rejects.toBeInstanceOf(AppError)
  })
})
