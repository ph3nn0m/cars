import { IsNotEmpty } from 'class-validator';
import { CreateCarDto } from './createCar.dto';

export class UpdateCarDto extends CreateCarDto {

    @IsNotEmpty()
    readonly id: number;
}
