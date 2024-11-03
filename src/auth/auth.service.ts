
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { signInDto } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(signInDto: signInDto): Promise<any> {

        const { email, pass } = signInDto;

        const user = await this.usersService.findByEmail(email);

        if (user instanceof NotFoundException) { return user; }

        const autorized = await this.usersService.verifyPassword(user.password, pass);

        if (!autorized) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, username: user.email };
        
        return {
            access_token: await this.jwtService.signAsync(payload),
        };

    }
}