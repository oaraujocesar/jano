import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CovidPatterns extends BaseSchema {
  protected tableName = 'covid_patterns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('sex').notNullable()
      table.integer('age').notNullable()
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
