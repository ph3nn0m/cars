import { Table, Column, Model, DataType, HasMany, ForeignKey } from 'sequelize-typescript';
import { Car } from '../cars/car.entity';
import { Owner } from '../owners/owner.entity';
import { Service } from '../service/service.entity';

@Table({
    tableName: 'budgets',
})
export class Budget extends Model<Budget> {

    @ForeignKey(() => Owner)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    owner_id: number;

    @ForeignKey(() => Car)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    car_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    total: string;
    
    @HasMany(() => Service)
    servces: Service[];
}
