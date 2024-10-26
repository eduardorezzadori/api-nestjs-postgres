import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    async create(@Body() user: CreateUserDto): Promise<User> {
        return await this.userService.create(user);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<User> {
        return await this.userService.find(id);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateUser: UpdateUserDto): Promise<User> {
        return await this.userService.update(id, updateUser);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<string | NotFoundException> {
        return await this.userService.delete(id);
    }
}
