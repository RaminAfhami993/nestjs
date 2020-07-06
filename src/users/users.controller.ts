import { Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface'


@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService) {};

    @Post()
    signUp(): User[] {
        return this.userService.findAll();
    }
}
