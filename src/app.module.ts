import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { VendasModule } from './vendas/vendas.module';

@Module({
  imports: [DatabaseModule, UsersModule, VendasModule],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {}
