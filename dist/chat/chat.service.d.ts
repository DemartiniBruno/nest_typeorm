import { VendasService } from 'src/vendas/vendas.service';
export declare class ChatService {
    private readonly vendaService;
    constructor(vendaService: VendasService);
    teste(): Promise<void>;
}
