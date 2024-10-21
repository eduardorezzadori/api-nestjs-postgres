import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreatePlanLimitsDto } from './dto/create-plan-limits.dto';
import { PlanLimitsService } from './plan-limits.service';
import { PlanLimits } from '@prisma/client';

@Controller('plan-limits')
export class PlanLimitsController {
    constructor(private planLimitsService: PlanLimitsService) { }

    @Post()
    async create(@Body() createPlanLimitsDto: CreatePlanLimitsDto) {
        return this.planLimitsService.create(createPlanLimitsDto);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<PlanLimits> {
        return this.planLimitsService.find(id);
    }

    @Get()
    async findAll(): Promise<PlanLimits[]> {
        return this.planLimitsService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() createPlanLimitsDto: CreatePlanLimitsDto): Promise<PlanLimits> {
        return this.planLimitsService.update(id, createPlanLimitsDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<string> {
        return this.planLimitsService.remove(id);
    }
}
