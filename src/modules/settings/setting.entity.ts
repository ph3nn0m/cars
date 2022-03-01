import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'settings',
})
export class Setting extends Model<Setting> {
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    key: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    value: string;

}
