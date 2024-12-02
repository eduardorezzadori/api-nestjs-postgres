import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubsDto } from './dto/create-subs.dto';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
    constructor(private subscriptionsService: SubscriptionsService) { }

    @Post('subscribe')
    async create(@Body() createSubsDto: CreateSubsDto) {
        return this.subscriptionsService.create(createSubsDto)
    }

    @Post('unsubscribe/:id')
    async unsubscribe(@Param('id') id: string, @Body() createSubsDto: CreateSubsDto) {
        return this.subscriptionsService.unsubscribe(id, createSubsDto)
    }

    @Get()
    async findAll() {
        return this.subscriptionsService.findAll()
    }
}
