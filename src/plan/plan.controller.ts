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
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Public } from 'src/auth/isPublicDecorator';

@Controller('plan')
export class PlanController {
  constructor(private planService: PlanService) { }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Cria um plano' })
  @ApiBody({ type: CreatePlanDto })
  @Post()
  create(@Body() createPlan: CreatePlanDto): Promise<Plan> {
    return this.planService.createPlan(createPlan);
  }

  @Public()
  @Get()
  findAll(): Promise<Plan[]> {
    return this.planService.getAll();
  }

  @ApiBearerAuth()
  @Get(':id')
  async find(@Param('id') id: string): Promise<Plan> {
    return this.planService.get(id);
  }

  @ApiBearerAuth()
  @ApiOperation({ summary: 'Atualiza um plano' })
  @ApiBody({ type: UpdatePlanDto })
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
    return this.planService.update(id, updatePlanDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<string> {
    return this.planService.remove(id);
  }
}
