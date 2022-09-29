import { Table, Column, Model, HasOne, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript'
import Address from './address.model'
import Team from './team.model'
import { ActiveType } from './enumerators';

@Table
export default class Person extends Model {

  @Column({ field: "id_person_xpto", type: DataType.UUIDV4, primaryKey: true, defaultValue: DataType.UUIDV4 })
  id_person!: number;

  @Column({ field: "name_xpto", type: DataType.STRING, allowNull: false })
  name: string

  @Column({ type: DataType.ENUM(...Object.values(ActiveType)), allowNull: false, defaultValue: ActiveType.SIM })
  active: ActiveType

  @ForeignKey(() => Team)
  @Column
  id_team: number;

  @ForeignKey(() => Address)
  @Column({ type: DataType.UUIDV4, allowNull: false, onDelete: 'CASCADE' })
  id_address: Address

  @BelongsTo(() => Team)
  team: Team

  @BelongsTo(() => Address, { foreignKey: "id_address" })
  public address: Address
}
