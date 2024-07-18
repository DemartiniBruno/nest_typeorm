import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from 'socket.io';
import { VendasService } from 'src/vendas/vendas.service';
import { ChatService } from './chat.service';
import { Inject, Injectable } from '@nestjs/common';

@WebSocketGateway(8085, {
  cors: {
    origin: '*',
  },
})  



@Injectable()
export class ChatGateway {
  constructor(
    private vendasService: ChatService
  ) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(message)
    this.server.emit('message', message);
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log(data)
    return from([1, 2, 3]).pipe(map(item => ({ event: 'events', data: item })));
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    this.vendasService.teste()
    return data;
  }

  newVenda(args) {
    this.server.emit('newVenda', args)
  }

}