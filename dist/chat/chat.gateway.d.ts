import { WsResponse } from '@nestjs/websockets';
import { Observable } from 'rxjs';
import { Server } from 'socket.io';
import { ChatService } from './chat.service';
export declare class ChatGateway {
    private vendasService;
    constructor(vendasService: ChatService);
    server: Server;
    handleMessage(message: string): void;
    findAll(data: any): Observable<WsResponse<number>>;
    identity(data: number): Promise<number>;
    newVenda(args: any): void;
}
