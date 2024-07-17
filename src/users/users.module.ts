import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { DatabaseModule } from 'src/database/database.module';
import {  } from 'typeorm';
import { UsersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [...UsersProviders, UsersService]
})
export class UsersModule {}
