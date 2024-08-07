import { Body, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vendas } from './venda.entity';
import { ChatGateway } from 'src/chat/chat.gateway';

@Injectable()
export class VendasService {
    constructor(
        @Inject('VENDAS_REPOSITORY')
        private readonly vendasRepository: Repository<Vendas>,
        // private readonly gateway: ChatGateway
    ) {}

    async findVenda(@Body() body): Promise<Vendas>{
        const venda = await this.vendasRepository.findOne({
            where:{
                id: body
            }
        })
        return venda
    }

    async findAllVendas(): Promise<Vendas[]> {
        return this.vendasRepository.find();
    }

    async createVenda(@Body() body:any): Promise<Vendas> {
        const createdVenda = await this.vendasRepository.save({
            description: body.description,
            value: body.value
        })

        // this.gateway.newVenda(createdVenda)
        //Aqui depois que criar deve chamar a função do socket para enviar um evento

        return createdVenda;
    }

    async updateVenda(@Body() body): Promise<Vendas> {
          const updatedVenda = await this.vendasRepository.update(body, {
            status: 1,
        })

        return await this.findVenda(body)
    }

}
