import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAllUsers(response: any): Promise<any>;
    createuser(response: any, userDTO: any): Promise<any>;
}
