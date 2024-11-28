import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanLimitsDto {
  @ApiProperty() 'kilowatts': string;
  @ApiProperty() 'instalations': string;
}
