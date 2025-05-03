import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        JwtModule.register({
            secret: "cM193od8~k#C##od87G4H##fJKehL]y2"
        }), 
        UserModule,
        PrismaModule
    ],
    controllers: [AuthController]
})
export class AuthModule{

}