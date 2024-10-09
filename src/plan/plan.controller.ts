import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from '@prisma/client';

@Controller('plan')
export class PlanController {
    constructor(private planService: PlanService) { }

    @Post()
    create(@Body() createPlan: CreatePlanDto): Promise<Plan> {
        return this.planService.createPlan(createPlan)
    }

    @Get()
    findAll(): string {
        return "achooo"
    }
}
