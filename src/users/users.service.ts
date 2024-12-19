import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import * as argon2 from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async hashPassword(password: string): Promise<string> {
    return await argon2.hash(password);
  }

  async verifyPassword(
    hashedPassword: string,
    password: string,
  ): Promise<boolean> {
    return await argon2.verify(hashedPassword, password);
  }

  async create(createUserDto: CreateUserDto): Promise<User | string> {
    const { password, confirmationPassword } = createUserDto;

    if (password != confirmationPassword) {
      return 'As senhas não conferem!';
    }

    createUserDto.password = await this.hashPassword(password);
    createUserDto.birthdate = new Date(createUserDto.birthdate); // isso aqui ta bem ruim

    delete createUserDto.confirmationPassword;

    const emailAlredyUsed = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (emailAlredyUsed) {
      if (!emailAlredyUsed.deleted_at) {
        throw new ConflictException('e-mail já cadastrado!');

      } else {
        return await this.prisma.user.update({
          where: { id: emailAlredyUsed.id },
          data: { ...createUserDto, deleted_at: null },
        });

      }
    }

    return await this.prisma.user.create({
      data: createUserDto,
    });
  }

  async find(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!user) { throw new NotFoundException('Usuário não encontrado!'); }

    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany({
      where: {
        deleted_at: null,
      },
    });
  }

  async update(id: string, updateUser: UpdateUserDto): Promise<User> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!foundUser) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    const { name, email, phone, address, birthdate } = updateUser;

    try {
      if (!name) updateUser.name = foundUser.name;
      if (!email) updateUser.email = foundUser.email;
      if (!phone) updateUser.phone = foundUser.phone;
      if (!address) updateUser.address = foundUser.address;
      if (!birthdate) updateUser.birthdate = foundUser.birthdate;

      const updatedUser = await this.prisma.user.update({
        where: { id: id },
        data: updateUser,
      });

      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<string> {
    const foundUser = await this.prisma.user.findFirst({
      where: {
        id: id,
        deleted_at: null,
      },
    });

    if (!foundUser) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    try {
      await this.prisma.user.delete({
        where: { id: id },
      });
    } catch (error) {
      throw error;
    }

    return 'Usuário removido permanentemente!';
  }

  async remove(id: string): Promise<User> {
    const deleted_at = new Date();

    const foundUser = await this.prisma.user.findFirst({
      where: {
        id: id,
        deleted_at: null,
      }
    })

    if (!foundUser) {
      throw new NotFoundException('O usuário não foi encontrado!')
    }

    try {
      return await this.prisma.user.update({
        where: { id: id },
        data: { deleted_at: deleted_at },
      });

    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: email,
        deleted_at: null,
      },
    });

    if (!user) {
      throw new NotFoundException(
        'Não existe um usuario cadastrado para este e-mail',
      );
    }

    return user;
  }
}
