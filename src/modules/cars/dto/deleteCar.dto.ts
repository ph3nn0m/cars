import { IsNotEmpty } from 'class-validator';

export class DeleteCarDto {
    
    @IsNotEmpty()
    readonly id: number;
}
