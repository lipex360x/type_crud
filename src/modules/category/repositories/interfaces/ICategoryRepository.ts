import Category from '@modules/category/infra/typeorm/entities/Category'

export interface CreateProps {
  data: string
}

export default interface ICategoryRepository {
  create(data: CreateProps): Promise<Category>
}
