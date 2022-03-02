import { Table, Column, Model, DataType, ForeignKey, BelongsTo, Unique, HasMany } from 'sequelize-typescript';
import { Color } from 'src/core/enum/Color';
import { Budget } from '../budgets/budget.entity';

import { Owner } from '../owners/owner.entity';
import { Service } from '../service/service.entity';

@Table({
    tableName: 'cars',
})
export class Car extends Model<Car> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    brand: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    model: string;

    @Unique(true)
    @Column({
        type: DataType.STRING(10),
        allowNull: false,
    })    
    license_plate: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    production_year: string;

    @Column({ type: DataType.ENUM(Color.black,Color.green,Color.grey,Color.red,Color.white) })
    color: Color;

    @ForeignKey(() => Owner)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    owner_id: number;

    @BelongsTo(() => Owner)
    owner: Owner;

    @HasMany(() => Service)
    sercices: Service[];

    @HasMany(() => Budget)
    budgets: Budget[];
}
