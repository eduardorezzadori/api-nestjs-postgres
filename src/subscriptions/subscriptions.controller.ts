import { Body, Controller, Post } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { CreateSubsDto } from './dto/create-subs.dto';

@Controller('subscriptions')
export class SubscriptionsController {
    constructor(private subscriptionsService: SubscriptionsService) { }

    @Post()
    async create(@Body() createSubsDto: CreateSubsDto) {
        return this.subscriptionsService.create(createSubsDto)
    }
}
