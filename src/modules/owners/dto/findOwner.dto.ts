import { IsNotEmpty } from 'class-validator';

export class FindOwnerDto {

    @IsNotEmpty()
    readonly id: number;
}
