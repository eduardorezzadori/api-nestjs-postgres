import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { Plan } from '@prisma/client';
import { UpdatePlanDto } from './dto/update-plan.dto';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('plan')
export class PlanController {
  constructor(private planService: PlanService) {}

  @ApiOperation({ summary: 'Cria um plano' })
  @ApiBody({ type: CreatePlanDto })
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

  @ApiOperation({ summary: 'Atualiza um plano' })
  @ApiBody({ type: UpdatePlanDto })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.planService.remove(id);
  }
}
