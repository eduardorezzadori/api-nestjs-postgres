import { ApiProperty } from "@nestjs/swagger";

export class UpdatePlanDto {
    @ApiProperty() "name": string;
    @ApiProperty() "description": string;
    @ApiProperty() "monthly_price": string;
    @ApiProperty() "annual_price": string;
    @ApiProperty() "duration": string;
    @ApiProperty() "limits_id": string;
    @ApiProperty() "resources_id": string;
    @ApiProperty() "updated_at": Date;
}