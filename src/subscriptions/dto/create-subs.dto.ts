import { ApiProperty } from "@nestjs/swagger";

export class CreateSubsDto {
    @ApiProperty() 'user_id': string;      
    @ApiProperty() 'plan_id': string;      
    @ApiProperty() 'payment_type': string;
    @ApiProperty() 'created_at'?: Date;
    @ApiProperty() 'updated_at'?: Date;
    @ApiProperty() 'deleted_at'?: Date;
}