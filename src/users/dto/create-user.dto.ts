import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty() 'name': string;
  @ApiProperty() 'email': string;
  @ApiProperty() 'password': string;
  @ApiProperty() 'confirmationPassword': string;
  @ApiProperty() 'phone': string;
  @ApiProperty() 'address': string;
  @ApiProperty() 'birthdate': Date;
  @ApiProperty() 'user_type': string;
}
