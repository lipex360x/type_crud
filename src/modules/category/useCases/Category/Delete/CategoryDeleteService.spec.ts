import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryCreateService from '../Create/CategoryCreateService'
import CategoryDeleteService from './CategoryDeleteService'
import CategoryIndexService from '../Index/CategoryIndexService'

let fakecategoryRepository: FakeCategoryRepository
let categoryDeleteService: CategoryDeleteService
let categoryCreateService: CategoryCreateService
let categoryIndexService: CategoryIndexService

describe('Category Delete', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryDeleteService = new CategoryDeleteService(fakecategoryRepository)
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
    categoryIndexService = new CategoryIndexService(fakecategoryRepository)
  })

  it('should not be able to delete a invalid category', async () => {
    await expect(
      categoryDeleteService.execute({ id: Faker.datatype.uuid() })
    ).rejects.toBeInstanceOf(AppError)
  })

  it('should be able to delete a category', async () => {
    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    const { id } = await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    await categoryDeleteService.execute({ id })

    const getCategories = await categoryIndexService.execute()
    expect(getCategories.length).toEqual(3)
  })
})
