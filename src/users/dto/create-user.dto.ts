import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  'name': string;

  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  'email': string;
  
  @ApiProperty()
  @IsString()
  @MinLength(6)
  'password': string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  'confirmationPassword': string;
  
  @ApiProperty() 'phone': string;
  @ApiProperty() 'address': string;

  @ApiProperty()
  @IsDate()
  'birthdate': Date;
  
  @ApiProperty() 'user_type': string;
}
