import { Injectable, NotFoundException } from '@nestjs/common';
import { Subscriptions } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubsDto } from './dto/create-subs.dto';

@Injectable()
export class SubscriptionsService {
    constructor(private prisma: PrismaService) { }

    async create(createSubsDto: CreateSubsDto): Promise<Subscriptions> {
        return await this.prisma.subscriptions.create({
            data: createSubsDto,
        });
    }

    async unsubscribe(id: string, createSubsDto: CreateSubsDto): Promise<Subscriptions> {
        createSubsDto.deleted_at = new Date();

        const foundSubs = await this.prisma.subscriptions.findUnique({
            where: { id: id },
        });

        if (!foundSubs) {
            throw new NotFoundException('Assinatura nao encontrada!');
        }

        return await this.prisma.subscriptions.update({
            where: { id: id },
            data: createSubsDto,
        });
    }

    async findAll(): Promise<Subscriptions[]> {
        return await this.prisma.subscriptions.findMany({
            where: { deleted_at: null },
        });
    }
}
