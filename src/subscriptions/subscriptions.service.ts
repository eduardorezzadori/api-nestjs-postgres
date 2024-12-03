import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Subscriptions } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSubsDto } from './dto/create-subs.dto';

@Injectable()
export class SubscriptionsService {
    constructor(private prisma: PrismaService) { }

    async subscribe(createSubsDto: CreateSubsDto): Promise<Subscriptions> {

        const { user_id, plan_id, payment_type } = createSubsDto; 

        const foundSubs = await this.prisma.subscriptions.findFirst({
            where: {
                user_id: user_id,
                plan_id: plan_id
            }
        })

        if (foundSubs){
            if (!foundSubs.deleted_at) {
                throw new ConflictException('O usuário já possui esse plano!');

            } else {

                return await this.prisma.subscriptions.update({
                    where: { id: foundSubs.id },
                    data: { deleted_at: null },
                });

            }
        }
        
        return await this.prisma.subscriptions.create({
            data: createSubsDto,
        });
    }

    async unsubscribe(id: string): Promise<Subscriptions> {
        const deleted_at = new Date();

        const foundSubs = await this.prisma.subscriptions.findUnique({
            where: { id: id },
        });

        if (!foundSubs) {
            throw new NotFoundException('Assinatura nao encontrada!');
        }

        return await this.prisma.subscriptions.update({
            where: { id: id },
            data: { deleted_at: deleted_at },
        });
    }

    async findAll(): Promise<Subscriptions[]> {
        return await this.prisma.subscriptions.findMany({
            where: { deleted_at: null },
        });
    }
}
