import { IsNotEmpty, IsEnum } from 'class-validator';
import { Color } from 'src/core/enum/Color';

export class CreateCarDto {

    @IsNotEmpty()
    readonly brand: string;

    @IsNotEmpty()
    readonly model: string;

    @IsNotEmpty()
    @IsEnum(Color)
    readonly color: Color;

    @IsNotEmpty()
    readonly production_year: string;

    @IsNotEmpty()
    readonly license_plate: string;

    @IsNotEmpty()
    readonly owner_id: number;
}
