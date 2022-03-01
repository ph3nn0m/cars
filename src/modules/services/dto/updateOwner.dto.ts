import { IsNotEmpty } from 'class-validator';
import { CreateOwnerDto } from './createOwner.dto';

export class UpdateOwnerDto extends CreateOwnerDto {

    @IsNotEmpty()
    readonly id: number;
}
