import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginDTO } from "./dtos/auth-login.dto";
import { AuthRegisterDTO } from "./dtos/auth-register.dto";
import { AuthForgetDTO } from "./dtos/auth-forget.dto";
import { AuthResetDTO } from "./dtos/auth-reset.dto";
import { UserService } from "src/user/user.service";
import { AuthService } from "./auth.service";

@Controller('v1/auth')
export class AuthController{

    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService
    ){}

    @Post('login')
    async login(@Body() {email, password}: AuthLoginDTO){
        return this.authService.login(email, password);
    }

    @Post('register')
    async register(@Body() data: AuthRegisterDTO){
        return this.userService.create(data);
    }

    @Post('forget')
    async forget(@Body() {email}: AuthForgetDTO){
        return this.authService.forget(email);
    }

    @Post('reset')
    async reset(@Body()  {password, token}: AuthResetDTO){
        return this.authService.reset(password, token);
    }
}