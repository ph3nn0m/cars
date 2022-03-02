import { IsNotEmpty } from 'class-validator';

export class FindSettingDto {

    @IsNotEmpty()
    readonly key: string;

    constructor(partial: Partial<FindSettingDto>) {
        Object.assign(this, partial);
    }
}
