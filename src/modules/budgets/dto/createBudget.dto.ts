import { IsNotEmpty } from 'class-validator';
import { Service } from 'src/modules/service/service.entity';

export class CreateBudgetDto {

    @IsNotEmpty()
    readonly owner_id: number;

    @IsNotEmpty()
    readonly car_id: number;
    
    @IsNotEmpty()
    servces: Service[];
}
