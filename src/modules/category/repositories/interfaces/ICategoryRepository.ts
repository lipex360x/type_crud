import Category from '@modules/category/infra/typeorm/entities/Category'

export interface CreateProps {
  name: string
  description: string
}

export interface FindByNameProps {
  name: string
}

export interface FindByIdProps {
  id: string
}

export interface DeleteProps {
  id: string
}

export default interface ICategoryRepository {
  create(data: CreateProps): Promise<Category>
  findById(data: FindByIdProps): Promise<Category>
  findByName(data: FindByNameProps): Promise<Category>
  findAll(): Promise<Category[]>
  delete(data: DeleteProps): Promise<void>
}
