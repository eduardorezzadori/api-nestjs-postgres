import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlanModule } from './plan/plan.module';
import { PrismaService } from './prisma/prisma.service';
import { PlanLimitsModule } from './plan-limits/plan-limits.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, PlanModule, PlanLimitsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
