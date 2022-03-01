import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class SettingDto {

    @IsNotEmpty()
    readonly key: string;

    @IsNotEmpty()
    readonly value: string;

}
