import { Module } from '@nestjs/common';
import { Database } from './database';

@Module({
  providers: [...Database],
  exports: [...Database],
  imports: [],
})
export class DatabaseModule {}
