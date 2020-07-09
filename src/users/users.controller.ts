import { Controller, Post, Get, Body, UseGuards, Request  } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthenticatedGuard } from '../common/guards/authenticated.guard';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService) {};

    // @Post()
    // signUp(@Body() userDto: UserDto): Promise<User> {
    //     return this.userService.createUser(userDto);
    // };


    // @UseGuards(AuthGuard('local'))
    // @Post('auth/login')
    // async login(@Request() req): Promise<User> {
    //     const { password, __v, ...user} = req.user._doc;
    //   return user;
    // }

    // @Get('test')
    // async test(@Request() req): Promise<User> {
    //     const { password, __v, ...user} = req.user._doc;
    //   return user;
    // }

    @UseGuards(AuthenticatedGuard)
    @Get('/test')
    Test(@Request() req) {
      return { user: req.user };
    }
}
