import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UpdatePartialUserDTO } from "./dtos/updatePartial-user.dto";

@Injectable()
export class UserService{

    constructor( private readonly prisma: PrismaService ){}

    async create({name, email, password}: CreateUserDTO){
        
        return await this.prisma.tb_users.create({
            data: {
                name,
                email,
                password
            },
        })
    }
    async findbyId(id: number){
        this.exists(id);
        return await this.prisma.tb_users.findUnique({
            where:{
                id: id
            }
        })
    }
    async findAll(){
        return await this.prisma.tb_users.findMany();
    }
    async update(data : UpdateUserDTO, id: number){
        this.exists(id);
        return await this.prisma.tb_users.update({
            data,
            where: {
                id: id
            }
        })
    }
    async updatePartial(data : UpdatePartialUserDTO, id: number){
        this.exists(id);
        return await this.prisma.tb_users.update({
            data,
            where: {
                id: id
            }
        })
    }
    async delete(id: number){

       this.exists(id);

        return await this.prisma.tb_users.delete({
            where: {
                id: id
            }
        })
    }
    async exists(id: number){
        if(!(await this.prisma.tb_users.count(
            {
                where: {
                    id: id
                }
            }
        ))){
            throw new NotFoundException();
        }
    }
    
}