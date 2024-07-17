import { Inject, Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USER_REPOSITORY')
        private readonly userRepository: Repository<Users>
    ) {    }

    async findAllUsers(): Promise<Users[]> {
        return this.userRepository.find();
    }

    async createUser(userDTO: UsersDto): Promise<UsersDto>{
        const createdUser = await this.userRepository.save(userDTO);
        return createdUser;
    }
}
