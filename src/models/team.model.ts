import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript'
import Person from './person.model'

@Table
export default class Team extends Model {
  
  @Column({ type: DataType.UUIDV4, primaryKey: true, defaultValue: DataType.UUIDV4 })
  id_team!: number;

  @Column
  name: string

  @HasMany(() => Person)
  persons: Person[]
}