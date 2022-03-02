import { IsNotEmpty } from 'class-validator';

export class SettingDto {

    @IsNotEmpty()
    readonly key: string;

    @IsNotEmpty()
    readonly value: string;

}
