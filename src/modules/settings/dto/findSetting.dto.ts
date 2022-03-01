import { IsNotEmpty } from 'class-validator';

export class FindSettingDto {

    @IsNotEmpty()
    readonly key: string;

}
