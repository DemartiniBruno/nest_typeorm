import { VendasService } from './vendas.service';
export declare class VendasController {
    private readonly VendasService;
    constructor(VendasService: VendasService);
    findAllVendas(response: any): Promise<any>;
    createVenda(response: any, body: any): Promise<any>;
}
