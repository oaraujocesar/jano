import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pattern extends BaseModel {
  public static table = 'covid_patterns_groups'

  @column({ isPrimary: true })
  public id: number

  @column()
  public sampling: number

  @column()
  public average_age: number

  @column()
  public male: number

  @column()
  public female: number

  @column()
  public symptoms: string

  @column()
  public state: string

  @column()
  public country: string

  @column()
  public reference?: string

  @column()
  public rtpcr?: string

  @column()
  public quick_test?: string

  @column()
  public x_ray?: string

  @column()
  public tomography?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
