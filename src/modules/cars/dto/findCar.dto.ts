import { IsNotEmpty } from 'class-validator';

export class FindCarDto {
    
    @IsNotEmpty()
    readonly id: number;
}
