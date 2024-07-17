import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (
        private readonly usersService: UsersService
    ) {}

    @Get()
    async findAllUsers(@Res() response){
        return response.status(200).json(await this.usersService.findAllUsers());
    }

    // @Get(':id')
    // findOne(@Res() response, @Param('id') id){
    //     return response.status(200).json(this.usersService.findAllUsers());
    // }

    @Post()
    async createuser(@Res() response, @Body() userDTO){
        const userCreated = await this.usersService.createUser(userDTO);
        return response.status(201).json(userCreated)
    }
}
