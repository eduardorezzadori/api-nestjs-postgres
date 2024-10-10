import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from '@prisma/client';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plan')
export class PlanController {
    constructor(private planService: PlanService) { }

    @Post()
    create(@Body() createPlan: CreatePlanDto): Promise<Plan> {
        return this.planService.createPlan(createPlan);
    }

    @Get()
    findAll(): Promise<Plan[]> {
        return this.planService.getAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<Plan> {
        return this.planService.get(id);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
        return this.planService.update(id, updatePlanDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<string> {
        return this.planService.remove(id);
    }
}
