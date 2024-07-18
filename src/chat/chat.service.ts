import { Inject, Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';
import { VendasService } from 'src/vendas/vendas.service';
import { Repository } from 'typeorm';
import { Vendas } from 'src/vendas/venda.entity';

@Injectable()
export class ChatService {
    constructor(
        // @Inject('VENDAS_REPOSITORY')
        private readonly vendaService: VendasService,
        // private readonly gateway: ChatGateway
    ) {}

    async teste(){
        const teste = await this.vendaService.findAllVendas()
        console.log(teste)
    }
}
