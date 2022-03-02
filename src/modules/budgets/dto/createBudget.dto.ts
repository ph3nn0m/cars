import { Optional } from '@nestjs/common';
import { IsNotEmpty } from 'class-validator';
import { CreateServiceDto } from 'src/modules/service/dto/createService.dto';
import { Service } from 'src/modules/service/service.entity';

export class CreateBudgetDto {

    @IsNotEmpty()
    readonly owner_id: number;

    @IsNotEmpty()
    readonly car_id: number;

    @Optional()
    readonly total: string;
    
    @IsNotEmpty()
    readonly services: Service[];

    constructor(partial: Partial<CreateBudgetDto>|Service) {
        Object.assign(this, partial);
    }
}
