import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSubsDto } from './dto/create-subs.dto';
import { SubscriptionsService } from './subscriptions.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('subscriptions')
export class SubscriptionsController {
    constructor(private subscriptionsService: SubscriptionsService) { }

    @ApiBearerAuth()
    @Post('subscribe')
    async subscribe(@Body() createSubsDto: CreateSubsDto) {
        return this.subscriptionsService.subscribe(createSubsDto)
    }

    @ApiBearerAuth()
    @Post('unsubscribe/:id')
    async unsubscribe(@Param('id') id: string) {
        return this.subscriptionsService.unsubscribe(id)
    }

    @ApiBearerAuth()
    @Get()
    async findAll() {
        return this.subscriptionsService.findAll()
    }
}
