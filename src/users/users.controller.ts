import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/auth/isPublicDecorator';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) { }

  @Public()
  @ApiOperation({ summary: 'Cria um usuario' })
  @ApiBody({ type: CreateUserDto })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() user: CreateUserDto): Promise<User | string> {
    return await this.userService.create(user);
  }

  @ApiBearerAuth()
  @Get(':id')
  async find(@Param('id') id: string): Promise<User> {
    return await this.userService.find(id);
  }

  @ApiBearerAuth()
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Atualiza um usuario' })
  @ApiBody({ type: UpdateUserDto })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.update(id, updateUser);
  }

  @ApiBearerAuth()
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return await this.userService.remove(id);
  }
}
