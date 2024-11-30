import { ApiProperty } from "@nestjs/swagger";

export class CreateSubsDto {
    @ApiProperty() 'user_id': string;      
    @ApiProperty() 'plan_id': string;      
    @ApiProperty() 'payment_type': string;
}