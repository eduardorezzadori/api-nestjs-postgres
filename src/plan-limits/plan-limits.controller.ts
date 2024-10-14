import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlanLimitsDto } from './dto/create-plan-limits.dto';
import { PlanLimitsService } from './plan-limits.service';

@Controller('plan-limits')
export class PlanLimitsController {
    constructor(private planLimitsService: PlanLimitsService) { }

    @Post()
    async create(@Body() createPlanLimitsDto: CreatePlanLimitsDto) {
        return this.planLimitsService.create(createPlanLimitsDto);
    }
}
