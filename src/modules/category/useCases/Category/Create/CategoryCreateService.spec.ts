import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeCategoryRepository from '@modules/category/repositories/fakes/FakeCategoryRepository'
import CategoryCreateService from './CategoryCreateService'

let fakecategoryRepository: FakeCategoryRepository
let categoryCreateService: CategoryCreateService

describe('TEST_NAME ', () => {
  beforeEach(() => {
    fakecategoryRepository = new FakeCategoryRepository()
    categoryCreateService = new CategoryCreateService(fakecategoryRepository)
  })

  it('should be able to create a new category', async () => {
    const props = null
    const test = await categoryCreateService.execute({ props })

    expect(test).toHaveProperty('VALUE')
  })
})
