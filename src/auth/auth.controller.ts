import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signIn.dto';
import { ApiBearerAuth, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Public } from './isPublicDecorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Public()
  @ApiOperation({
    summary: 'Executa o login para usuarios previamente cadastrados',
  })
  @ApiBody({ type: signInDto })
  @Post('login')
  async signIn(@Body() signIn: signInDto) {
    return await this.authService.signIn(signIn);
  }

  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retorna as informações do usuario contidas no token',
  })
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
