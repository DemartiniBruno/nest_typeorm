import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { VendasService } from 'src/vendas/vendas.service';
import { ChatService } from './chat.service';
export declare class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private chatService;
    private vendasService;
    constructor(chatService: ChatService, vendasService: VendasService);
    server: Server;
    handleConnection(client: any, ...args: any[]): Promise<void>;
    handleDisconnect(client: any): void;
    newVenda(body: any): Promise<void>;
    vendaProcessada(body: any): Promise<void>;
}
