import { Users } from './user.entity';
import { Repository } from 'typeorm';
import { UsersDto } from './users.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<Users>);
    findAllUsers(): Promise<Users[]>;
    createUser(body: any): Promise<UsersDto>;
}
