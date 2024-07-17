import { Body, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Vendas } from './venda.entity';

@Injectable()
export class VendasService {
    constructor(
        @Inject('VENDAS_REPOSITORY')
        private readonly vendasRepository: Repository<Vendas>
    ) {}

    async findAllVendas(): Promise<Vendas[]> {
        return this.vendasRepository.find();
    }

    async createVenda(@Body() body:any): Promise<Vendas> {
        const createdVenda = await this.vendasRepository.save({
            description: body.description,
            value: body.value
        })

        return createdVenda;
    }

}
