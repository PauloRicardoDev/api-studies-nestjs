import { Controller, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UserService } from "./user.service";
import { UserIdCheckMiddlewwre } from "src/middlewares/user-id-check.middleware";

@Module({
    imports: [ PrismaModule],
    controllers: [UserController],
    providers: [UserService],
    exports: []
})

export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserIdCheckMiddlewwre).forRoutes({
            path: 'users/id',
            method: RequestMethod.ALL
        })
    }
}