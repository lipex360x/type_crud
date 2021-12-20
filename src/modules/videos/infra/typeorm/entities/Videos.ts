import { v4 as uuid } from 'uuid'

import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm'
import Category from '@modules/category/infra/typeorm/entities/Category'

@Entity('videoss')
export default class Videos {
  @PrimaryColumn('uuid')
    id: string

  @Column()
    name: string

  @Column()
    description: string

  @Column()
    duration: number

  @Column()
    category_id: string

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
    category: Category

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
