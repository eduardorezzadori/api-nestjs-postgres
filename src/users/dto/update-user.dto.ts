import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty() 'name'?: string;
  @ApiProperty() 'email'?: string;
  @ApiProperty() 'phone'?: string;
  @ApiProperty() 'address'?: string;
  @ApiProperty() 'birthdate'?: Date;
  @ApiProperty() 'user_type'?: string;
}
