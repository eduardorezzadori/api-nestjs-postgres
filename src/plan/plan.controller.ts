import { Controller, Get, Post } from '@nestjs/common';

@Controller('plan')
export class PlanController {
    @Post()
    create() {

    }

    @Get()
    findAll(): string {
        return "achooo"
    }
}
