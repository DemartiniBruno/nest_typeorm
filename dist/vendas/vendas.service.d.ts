import { Repository } from 'typeorm';
import { Vendas } from './venda.entity';
export declare class VendasService {
    private readonly vendasRepository;
    constructor(vendasRepository: Repository<Vendas>);
    findVenda(body: any): Promise<Vendas>;
    findAllVendas(): Promise<Vendas[]>;
    createVenda(body: any): Promise<Vendas>;
    updateVenda(body: any): Promise<Vendas>;
}
