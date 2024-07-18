import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VendasProviders } from './vendas.providers';
import { ChatGateway } from 'src/chat/chat.gateway';

@Module({
  imports:[DatabaseModule,],
  // providers: [...VendasProviders,VendasService, ChatGateway],
  providers: [...VendasProviders,VendasService],
  controllers: [VendasController],
  // exports: [VendasService,]
})
export class VendasModule {}
