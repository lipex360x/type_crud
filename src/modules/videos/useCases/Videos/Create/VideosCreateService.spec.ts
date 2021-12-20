import AppError from '@shared/errors/AppError'
import Faker from 'faker'

import FakeVideosRepository from '@modules/videos/repositories/fakes/FakeVideosRepository'
import VideosCreateService from './VideosCreateService'

let fakevideosRepository: FakeVideosRepository
let videosCreateService: VideosCreateService

describe('Videos ', () => {
  beforeEach(() => {
    fakevideosRepository = new FakeVideosRepository()
    videosCreateService = new VideosCreateService(fakevideosRepository)
  })

  it('should be able to create a new videos', async () => {
    const props = null
    const test = await videosCreateService.execute({ props })

    expect(test).toHaveProperty('VALUE')
  })
})
