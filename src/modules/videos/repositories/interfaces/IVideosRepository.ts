import Videos from '@modules/videos/infra/typeorm/entities/Videos'

export interface CreateProps {
  data: string
}

export default interface IVideosRepository {
  create(data: CreateProps): Promise<Videos>
}
