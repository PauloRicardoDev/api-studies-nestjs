import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService{

    constructor (
        private readonly jwtService: JwtService,
        private readonly prismaService: PrismaService
    ){}

    async create(){

    }

    async verify(token: String){
        
    }

    async login(email: string, password: string){
        const user = this.prismaService.tb_users.findFirst({
            where: {
                email,
                password
            }
        });

        if(!user){
            throw new UnauthorizedException('Email e/ou senha incorretos')
        }

        return user;
    }

    async forget(email: string){

        const user = this.prismaService.tb_users.findFirst({
            where: {
                email,
            }
        });

        if(!user){
            throw new UnauthorizedException('Email incorreto')
        }

        return true;

    }

    async reset(password: string, token: string){
        // to do : se otoken for valido fazer a troca da senha

        const id = 0;

        await this.prismaService.tb_users.update({
            where: {
                id,
            },
            data: {
                password,
            },
        });

        return true;
    }
    
}