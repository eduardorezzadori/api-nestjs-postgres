import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(private readonly config: ConfigService) {
        super({
            datasources: {
                db: {
                    url: config.get('DATABASE_URL'),
                },
            },
            log: process.env.NODE_ENV === 'development' ? ['info', 'error'] : ['error'],
        });
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    async onModuleInit() {
        await this.$connect();
    }
}