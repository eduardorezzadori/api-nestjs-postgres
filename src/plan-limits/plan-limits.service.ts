import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PlanLimits } from '@prisma/client';
import { CreatePlanLimitsDto } from './dto/create-plan-limits.dto';

@Injectable()
export class PlanLimitsService {
    constructor(private prisma: PrismaService) { }

    async create(createPlanLimitsDto: CreatePlanLimitsDto) {
        return this.prisma.planLimits.create({
            data: createPlanLimitsDto,
        });
    }
}
