import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export default class CreateVideos1640031854591 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'videos',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true
          },

          {
            name: 'name',
            type: 'varchar',
            isUnique: true
          },

          {
            name: 'description',
            type: 'varchar',
          },

          {
            name: 'duration',
            type: 'numeric'
          },

          {
            name: 'category_id',
            type: 'uuid'
          },

          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()'
          },

          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: null
          }
        ],

        foreignKeys: [
          {
            name: 'fk_videos_category',
            columnNames: ['category_id'],
            referencedTableName: 'categories',
            referencedColumnNames: ['id']
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('videos')
  }
}
