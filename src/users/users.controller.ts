import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService) {};

    @Post()
    signUp(@Body() userDto: UserDto): Promise<User> {
        return this.userService.createUser(userDto);
    }
}
