import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UsersService } from 'src/users/users.service';
import { PlanService } from 'src/plan/plan.service';

@Module({
  imports: [PrismaModule],
  providers: [SubscriptionsService, UsersService, PlanService],
  controllers: [SubscriptionsController]
})
export class SubscriptionsModule { }
