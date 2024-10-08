import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PlanModule } from './plan/plan.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [PrismaModule, PlanModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
