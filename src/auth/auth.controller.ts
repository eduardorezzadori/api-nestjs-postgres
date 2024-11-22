import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto } from './dto/signIn.dto';
import { AuthGuard } from './auth.guard';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @ApiOperation({ summary: "Executa o login para usuarios previamente cadastrados" })
    @ApiBody({ type: signInDto })
    @Post('login')
    signIn(@Body() signIn: signInDto) {
        return this.authService.signIn(signIn);
    }

    @ApiOperation({ summary: "Retorna as informações do usuario contidas no token" })
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
