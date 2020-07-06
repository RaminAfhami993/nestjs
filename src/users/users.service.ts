import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private readonly userModel:Model<User>) {};


    private readonly users: User[] = [
        {
            name: "a",
            age: 1,
            password: '1'
        }
    ]

    findAll(): User[] {
        return this.users
    }
}
