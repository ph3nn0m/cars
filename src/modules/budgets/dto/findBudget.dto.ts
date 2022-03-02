import { IsNotEmpty } from 'class-validator';

export class FindBudgetDto {

    @IsNotEmpty()
    readonly id: number;

    constructor(partial: Partial<FindBudgetDto>) {
        Object.assign(this, partial);
    }
}
