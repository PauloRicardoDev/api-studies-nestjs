import { IsEmail, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDTO {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword({
        minLength: 8, 
        minLowercase: 4, 
        minUppercase: 1,
        minNumbers: 2, 
        minSymbols: 1
    })
    password: string;
}