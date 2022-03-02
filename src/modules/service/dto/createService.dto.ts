import { IsEnum, IsNotEmpty } from 'class-validator';
import { Job } from 'src/core/enum/Job';

export class CreateServiceDto {

    @IsNotEmpty()
    @IsEnum(Job)
    readonly job: Job;
    
    @IsNotEmpty()
    readonly cost: string;

    @IsNotEmpty()
    readonly budget_id: number;

    @IsNotEmpty()
    readonly car_id: number;
}
