import { Injectable, NotFoundException } from '@nestjs/common';
import { PlanLimits } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePlanLimitsDto } from './dto/create-plan-limits.dto';

@Injectable()
export class PlanLimitsService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanLimitsDto: CreatePlanLimitsDto): Promise<PlanLimits> {
    return this.prisma.planLimits.create({
      data: createPlanLimitsDto,
    });
  }

  async find(id: string): Promise<PlanLimits> {
    return this.prisma.planLimits.findUnique({
      where: { id: id },
    });
  }

  async findAll(): Promise<PlanLimits[]> {
    return this.prisma.planLimits.findMany({});
  }

  async update(
    id: string,
    createPlanLimitsDto: CreatePlanLimitsDto,
  ): Promise<PlanLimits> {
    const { kilowatts, instalations } = createPlanLimitsDto;

    try {
      const foundLimits = await this.prisma.planLimits.findFirst({
        where: { id: id },
      });

      if (!foundLimits) {
        throw new NotFoundException(
          'Os limites do plano não foram encontrados!',
        );
      }

      const updatePlanLimits = this.prisma.planLimits.update({
        where: { id: id },
        data: {
          kilowatts: kilowatts ? kilowatts : foundLimits.kilowatts,
          instalations: instalations ? instalations : foundLimits.instalations,
        },
      });

      return updatePlanLimits;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const foundLimits = await this.prisma.planLimits.findUnique({
        where: { id: id },
      });

      if (!foundLimits)
        throw new NotFoundException(
          'Os limites do plano não foram encontrados!',
        );

      await this.prisma.planLimits.delete({
        where: { id: id },
      });

      return 'Os limites do plano foram deletados com sucesso!';
    } catch (error) {
      throw error;
    }
  }
}
