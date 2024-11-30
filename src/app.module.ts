import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PlanLimitsModule } from './plan-limits/plan-limits.module';
import { PlanModule } from './plan/plan.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';

@Module({
  imports: [
    PrismaModule,
    PlanModule,
    PlanLimitsModule,
    UsersModule,
    AuthModule,
    SubscriptionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
