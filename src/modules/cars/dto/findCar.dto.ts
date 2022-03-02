import { IsNotEmpty } from 'class-validator';

export class FindCarDto {
    
    @IsNotEmpty()
    readonly id: number;

    constructor(partial: Partial<FindCarDto>) {
        Object.assign(this, partial);
    }
}
