import { Module } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { VendasService } from 'src/vendas/vendas.service';
import { DatabaseModule } from 'src/database/database.module';
import { VendasProviders } from 'src/vendas/vendas.providers';
import { ChatService } from './chat.service';

@Module({
  imports:[DatabaseModule],
  // providers: [ChatGateway, VendasService, ...VendasProviders, ChatService],
  providers: [ChatGateway, ChatService,VendasService, ...VendasProviders],
  exports: [ChatGateway]
})
export class ChatModule {}
