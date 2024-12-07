import { Injectable, NotFoundException } from '@nestjs/common';
import { Plan } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
  constructor(private prisma: PrismaService) {}

  async createPlan(createPlan: CreatePlanDto): Promise<Plan> {
    try {
      return await this.prisma.plan.create({
        data: createPlan,
      });
    } catch (error) {
      throw error;
    }
  }

  async getAll(): Promise<Plan[]> {
    return await this.prisma.plan.findMany();
  }

  async get(id: string): Promise<Plan> {
    return this.prisma.plan.findUnique({
      where: { id: id },
    });
  }

  async update(id: string, updatePlanDto: UpdatePlanDto): Promise<Plan> {
    const {
      name,
      description,
      monthly_price,
      annual_price,
      duration,
    } = updatePlanDto;

    try {
      const foundPlan = await this.prisma.plan.findUnique({
        where: { id: id },
      });

      if (!foundPlan) throw new NotFoundException('Plano não encontrado!');

      const updatePlan = await this.prisma.plan.update({
        where: { id: id },
        data: {
          name: name ? name : foundPlan.name,
          description: description ? description : foundPlan.description,
          monthly_price: monthly_price
            ? monthly_price
            : foundPlan.monthly_price,
          annual_price: annual_price ? annual_price : foundPlan.annual_price,
          duration: duration ? duration : foundPlan.duration,
        },
      });

      return updatePlan;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const foundPlan = await this.prisma.plan.findFirst({
        where: { id: id },
      });

      if (!foundPlan) throw new NotFoundException('Plano não encontrado!');

      await this.prisma.plan.delete({
        where: { id: id },
      });

      return 'Plano removido com sucesso!';
    } catch (error) {
      throw error;
    }
  }
}
