import { IsNotEmpty, MinLength, IsEmail } from 'class-validator';

export class UserDto {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(3)
    readonly password: string;
}
