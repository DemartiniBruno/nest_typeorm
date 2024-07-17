import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VendasProviders } from './vendas.providers';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports:[DatabaseModule,ChatGateway],
  providers: [...VendasProviders,VendasService],
  controllers: [VendasController]
})
export class VendasModule {}
