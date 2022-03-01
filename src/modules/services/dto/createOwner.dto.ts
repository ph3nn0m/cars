import { IsNotEmpty } from 'class-validator';

export class CreateOwnerDto {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly surname: string;
}
