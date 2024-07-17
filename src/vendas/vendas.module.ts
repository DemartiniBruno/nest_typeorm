import { Module } from '@nestjs/common';
import { VendasService } from './vendas.service';
import { VendasController } from './vendas.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VendasProviders } from './vendas.providers';

@Module({
  imports:[DatabaseModule],
  providers: [...VendasProviders,VendasService],
  controllers: [VendasController]
})
export class VendasModule {}
