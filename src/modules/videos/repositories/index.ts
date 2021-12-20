import { container } from 'tsyringe'

import IVideosRepository from '@modules/videos/repositories/interfaces/IVideosRepository'
import VideosRepository from '@modules/videos/infra/typeorm/repositories/VideosRepository'

const provider = {
  videos: VideosRepository
}

container.registerSingleton<IVideosRepository>(
  'VideosRepository',
  provider.videos
)
