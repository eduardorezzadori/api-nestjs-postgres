import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import * as argon2 from 'argon2';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async hashPassword(password: string): Promise<string> {
        return await argon2.hash(password);
    }

    async verifyPassword(hashedPassword: string, password: string): Promise<boolean> {
        return await argon2.verify(hashedPassword, password);
    }

    async create(createUserDto: CreateUserDto): Promise<User | string> {
        const { password, confirmationPassword } = createUserDto;

        if (password != confirmationPassword) { return 'As senhas não conferem!'; }

        createUserDto.password = await this.hashPassword(password);
        createUserDto.birthdate = new Date(createUserDto.birthdate); // isso aqui ta bem ruim

        delete createUserDto.confirmationPassword;

        const emailAlredyUsed = await this.prisma.user.findFirst({
            where: { email: createUserDto.email }
        });

        if (emailAlredyUsed) throw new ConflictException('e-mail já cadastrado!');

        return await this.prisma.user.create({
            data: createUserDto
        });
    }

    async find(id: string): Promise<User> {
        return await this.prisma.user.findUnique({
            where: { id: id }
        });
    }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async update(id: string, updateUser: UpdateUserDto): Promise<User> {
        const foundUser = await this.prisma.user.findUnique({
            where: { id: id }
        });

        if (!foundUser) { throw new NotFoundException('Usuário não encontrado!'); }

        const { name, email, phone, address, birthdate, payment_type } = foundUser;

        try {
            name ? name : foundUser.name;
            email ? email : foundUser.email;
            phone ? phone : foundUser.phone;
            address ? address : foundUser.address;
            birthdate ? birthdate : foundUser.birthdate;
            payment_type ? payment_type : foundUser.payment_type;

            const updatedUser = await this.prisma.user.update({
                where: { id: id },
                data: updateUser,
            });

            return updatedUser;

        } catch (error) {
            throw error;
        }

    }

    async delete(id: string): Promise<string | NotFoundException> {
        const foundUser = await this.prisma.user.findFirst({
            where: { id: id }
        });

        if (!foundUser) { return new NotFoundException('Usuário não encontrado!'); }

        try {
            await this.prisma.user.delete({
                where: { id: id }
            });

        } catch (error) {
            throw error;
        }

        return 'Usuário removido permanentemente!';
    }
}
