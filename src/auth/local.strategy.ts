import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../users/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({usernameField: 'name'});
        // super === super({ usernameField: 'username', passwordField: 'password' })
    }

    async validate(name: string, password: string): Promise<User> {
        const user = await this.authService.validateUser(name, password);
        if (!user) {
            throw new UnauthorizedException();
        } else {
            return user;
        }
    }
}