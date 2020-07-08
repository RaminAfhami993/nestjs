import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { User } from '../users/schemas/user.schema';
 
@Module({
  imports: [UsersModule, PassportModule, MongooseModule.forFeature([{ name: 'User', schema: User }])],
  providers: [AuthService, LocalStrategy, UsersService]
})

export class AuthModule {};
