import { IsNotEmpty } from 'class-validator';

export class FindOwnerDto {

    @IsNotEmpty()
    readonly id: number;

    constructor(partial: Partial<FindOwnerDto>) {
        Object.assign(this, partial);
    }
}
