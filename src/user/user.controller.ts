import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dtos/create-user.dto";
import { UpdateUserDTO } from "./dtos/update-user.dto";
import { UpdatePartialUserDTO } from "./dtos/updatePartial-user.dto";

@Controller('users')
export class UserController{

    @Post()
    async create(@Body() body: CreateUserDTO){
        return {body};
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        return {user:{}, id}
    }

    @Get()
    async read() {
        return {users:{}}
    }

    @Put(':id')
    async update(@Body() body : UpdateUserDTO, @Param('id', ParseIntPipe) id: number){
        return {
            method: 'Put',
            body,
            id
        }
    }

    @Patch(':id')
    async updatePatial(@Body() body  : UpdatePartialUserDTO, @Param('id', ParseIntPipe) id: number){
        return {
            method: 'Patch',
            body,
            id
        }
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return {
            method: 'Delete',
            id
        }
    }

}