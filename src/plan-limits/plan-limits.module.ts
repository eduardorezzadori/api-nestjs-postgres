import { Module } from '@nestjs/common';
import { PlanLimitsService } from './plan-limits.service';
import { PlanLimitsController } from './plan-limits.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PlanLimitsService],
  controllers: [PlanLimitsController],
  imports: [PrismaModule],
})
export class PlanLimitsModule {}
