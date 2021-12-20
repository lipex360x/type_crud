import { v4 as uuid } from 'uuid'

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  DeleteDateColumn
} from 'typeorm'

@Entity('categories')
export default class Category {
  @PrimaryColumn('uuid')
    id: string

  @Column()
    name: string

  @Column()
    description: string

  @CreateDateColumn()
    created_at: Date

  @UpdateDateColumn()
    updated_at: Date

  @DeleteDateColumn()
    deleted_at: Date

  @BeforeInsert()
  userProps(): void {
    this.id = uuid()
  }
}
