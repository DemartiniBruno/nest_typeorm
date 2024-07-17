import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/database/database.module';
import { UsersProviders } from './users.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...UsersProviders, UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
