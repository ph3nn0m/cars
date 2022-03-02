import { IsNotEmpty } from 'class-validator';

export class FindServiceDto {
  
    @IsNotEmpty()
    readonly budget_id: number;

}
