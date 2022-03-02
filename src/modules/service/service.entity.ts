import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Job } from 'src/core/enum/Job';
import { Budget } from '../budgets/budget.entity';
import { Car } from '../cars/car.entity';

@Table({
    tableName: 'services',
})
export class Service extends Model<Service> {
    
    @Column({ 
        type: DataType.ENUM(Job.change_oil, Job.change_filter, Job.change_belt, Job.general_check, Job.paint_job, Job.other),
        allowNull: false,
    })
    job: Job;

    @Column({
        type: DataType.STRING,        
        allowNull: false,
    })
    cost: string;

    @ForeignKey(() => Budget)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    budget_id: number;

    @ForeignKey(() => Car)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    car_id: number;

}
