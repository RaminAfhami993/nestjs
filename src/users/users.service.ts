import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>) {};

    async createUser(user): Promise<User> {
        return await new this.userModel(user).save();
    }

    async findOne(filter): Promise<User> {
        return await this.userModel.findOne(filter);
    }
}
