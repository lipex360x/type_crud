import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryCreateService from '../Create/CategoryCreateService'
import CategoryIndexService from './CategoryIndexService'

let fakecategoryRepository: FakeCategoryRepository
let categoryIndexService: CategoryIndexService
let categoryCreateService: CategoryCreateService

describe('Category Create', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryIndexService = new CategoryIndexService(fakecategoryRepository)
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
  })

  it('should be able to list all categories', async () => {
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

    await categoryCreateService.execute({
      name: Faker.name.firstName(),
      description: Faker.lorem.words(3)
    })

    const getCategories = await categoryIndexService.execute()

    expect(getCategories.length).toEqual(4)
  })
})
