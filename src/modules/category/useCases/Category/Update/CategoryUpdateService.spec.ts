import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryUpdateService from './CategoryUpdateService'
import CategoryCreateService from '../Create/CategoryCreateService'
import CategoryIndexService from '../Index/CategoryIndexService'

let fakecategoryRepository: FakeCategoryRepository
let categoryUpdateService: CategoryUpdateService
let categoryCreateService: CategoryCreateService
let categoryIndexService: CategoryIndexService

describe('Category Update', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryUpdateService = new CategoryUpdateService(fakecategoryRepository)
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
    categoryIndexService = new CategoryIndexService(fakecategoryRepository)
  })

  it('should not be able to update a invalid category', async () => {
    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    const getCategories = await categoryIndexService.execute()

    expect(getCategories.length).toEqual(2)

    const category = {
      id: 'fake_id',
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    }

    await expect(
      categoryUpdateService.execute(category)
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should not able to update a category with duplicated name', async () => {
    const setCategory = await categoryCreateService.execute({
      name: Faker.name.lastName(1),
      description: Faker.lorem.words(3)
    })

    await expect(
      categoryUpdateService.execute(setCategory)
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to update a category', async () => {
    const setCategory = await categoryCreateService.execute({
      name: Faker.name.lastName(1),
      description: Faker.lorem.words(3)
    })

    const updateCategory = await categoryUpdateService.execute({ id: setCategory.id, name: 'updated category' })

    expect(updateCategory.name).toBe('updated category')
  })
})
