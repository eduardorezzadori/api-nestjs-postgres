import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async create(createUserDto: UserDto): Promise<User> {
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    async find(id: string): Promise<User> {
        return this.prisma.user.findUnique({
            where: { id: id }
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }
}
