import { Controller, Get, Post, Body, UseGuards, Request, Response} from '@nestjs/common';
import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';
import { User } from './users/interfaces/user.interface';
import { UserDto } from './users/dto/user.dto';
import { UsersService } from './users/users.service';




@Controller()
export class AppController {

  constructor(private readonly userService:UsersService) {};

  @Get('/')
  index(): string {
    return 'Hi';
  }

  @Post('/signUp')
  signUp(@Body() userDto: UserDto): Promise<User> {
      return this.userService.createUser(userDto);
  };

  
  @UseGuards(LoginGuard)
  @Post('/login')
  async login(@Request() req): Promise<User> {
      const { password, __v, ...user} = req.user._doc;
    return user;
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get('/test')
  Test(@Request() req) {
    return { user: req.user };
  }


  @Get('/logout')
  logout(@Request() req) {
    req.logout();
    return 'Bye';
  }

}
