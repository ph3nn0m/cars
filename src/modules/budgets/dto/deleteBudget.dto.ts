import { IsNotEmpty } from 'class-validator';

export class DeleteBudgetDto {

    @IsNotEmpty()
    readonly id: number;
}
