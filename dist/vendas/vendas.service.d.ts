import { Repository } from 'typeorm';
import { Vendas } from './venda.entity';
export declare class VendasService {
    private readonly vendasRepository;
    constructor(vendasRepository: Repository<Vendas>);
    findAllVendas(): Promise<Vendas[]>;
    createVenda(body: any): Promise<Vendas>;
}
