import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/user.interface';


@Injectable()
export class AuthService {
    constructor(private readonly userService:UsersService) {};

    async validateUser(name: string, pass: string): Promise<User> {
        const user = await this.userService.findOne({ name, password: pass });
        if (user) {
            const { password, ...result } = user;
            return result;
        } else return null;
    };
};
