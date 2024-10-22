import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    async create(@Body() user: UserDto): Promise<User> {
        return this.userService.create(user);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<User> {
        return this.userService.find(id);
    }

    @Get()
    async findAll(): Promise<User[]> {
        return this.userService.findAll();
    }
}
