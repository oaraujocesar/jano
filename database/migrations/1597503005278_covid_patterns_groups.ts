import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CovidPatternsGroups extends BaseSchema {
  protected tableName = 'covid_patterns_groups'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('sampling').notNullable()
      table.integer('average_age').notNullable()
      table.string('male').notNullable()
      table.string('female').notNullable()
      table.string('symptoms').notNullable()
      table.string('state').notNullable()
      table.string('country').notNullable()
      table.string('reference').nullable()
      table.string('rtpcr').nullable()
      table.string('quick_test').nullable()
      table.string('x_ray').nullable()
      table.string('tomography').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
