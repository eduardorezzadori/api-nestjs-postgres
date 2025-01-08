import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  'name'?: string;
  
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  'email'?: string;

  @ApiProperty() 'phone'?: string;
  @ApiProperty() 'address'?: string;

  @ApiProperty()
  @IsDate()
  'birthdate'?: Date;

  @ApiProperty() 'user_type'?: string;
}
