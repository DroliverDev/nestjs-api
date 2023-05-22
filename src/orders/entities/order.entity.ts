import {
  Column,
  Default,
  DataType,
  PrimaryKey,
  AllowNull,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'orders' })
export class Order extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;
  @AllowNull(false)
  @Column(DataType.DECIMAL(10, 2))
  amount: number;
}
