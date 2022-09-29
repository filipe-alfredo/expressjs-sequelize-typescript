import { Table, Column, Model, ForeignKey, DataType } from 'sequelize-typescript'

@Table
export default class Address extends Model {

  @Column({ type: DataType.UUIDV4, primaryKey: true, defaultValue: DataType.UUIDV4 })
  id_address: number;

  @Column
  country: string

  @Column
  state: string

  @Column
  address: string
}
