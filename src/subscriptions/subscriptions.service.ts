import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubsDto } from './dto/create-subs.dto';
import { Subscriptions } from '@prisma/client';

@Injectable()
export class SubscriptionsService {
    constructor(private prisma: PrismaService) { }

    async create(createSubsDto: CreateSubsDto): Promise<Subscriptions> {
        return this.prisma.subscriptions.create({
            data: createSubsDto,
        });
    }
}
