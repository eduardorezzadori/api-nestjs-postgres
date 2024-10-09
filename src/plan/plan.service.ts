import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Plan, Prisma } from '@prisma/client';

@Injectable()
export class PlanService {
    constructor(private prisma: PrismaService) {
        // this.prisma 
    }

    async createPlan(createPlan: Prisma.PlanCreateInput): Promise<Plan> {
        return this.prisma.plan.create({
            data: createPlan
        })
    }

}
