import { IsNotEmpty } from 'class-validator';

export class DeleteOwnerDto {

    @IsNotEmpty()
    readonly id: number;
}
