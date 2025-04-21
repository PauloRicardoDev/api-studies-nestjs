import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UpdatePartialUserDTO } from "./dtos/updatePartial-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{


    constructor(private readonly service: UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.service.create(data);
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findbyId(id);
    }

    @Get()
    async read() {
        return this.service.findAll();
    }

    @Put(':id')
    async update(@Body() data : UpdateUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.service.update(data, id)
    }

    @Patch(':id')
    async updatePatial(@Body() data  : UpdatePartialUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.service.updatePartial(data, id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'Delete',
            id
        }
    }

}