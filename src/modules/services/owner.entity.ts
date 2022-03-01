import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Car } from '../cars/car.entity';

@Table({
    tableName: 'owners',
})
export class Owner extends Model<Owner> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    surname: string;

    @HasMany(() => Car)
    cars: Car[];
}
