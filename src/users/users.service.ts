import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users : any[]= [
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com'
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'jane.doe@example.com'
        },
        {
            id: 3,
            name: 'John Smith',
            email: 'john.smith@example.com'
        },

    ];

    getUsers() {
        return this.users;
    }

    createUser(user: CreateUserDto){

        this.users.push(user);

        return {
            id: this.users.length + 1,
            ...user
        }
    }
}
