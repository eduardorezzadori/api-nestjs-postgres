import { ApiProperty } from '@nestjs/swagger';

export class UpdatePlanDto {
  @ApiProperty() 'name'?: string;
  @ApiProperty() 'description'?: string;
  @ApiProperty() 'monthly_price'?: number;
  @ApiProperty() 'annual_price'?: number;
  @ApiProperty() 'duration'?: string;
}
