import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
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
import { Body, Inject, Injectable } from '@nestjs/common';

@WebSocketGateway(8085, {
  cors: {
    origin: '*',
  },
})  


@Injectable()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect{
  constructor(
    private chatService: ChatService,
    private vendasService: VendasService
  ) {}

  @WebSocketServer()
  server: Server;


  async handleConnection(client: any, ...args: any[]) {
    console.log('conectado')
    // console.log(await this.vendasService.findAllVendas())
  }

  handleDisconnect(client: any) {
    console.log('desconectado')
  }

  @SubscribeMessage('newVenda')
  async newVenda(@Body() body) {
    const createdVenda = await this.vendasService.createVenda(body)
    this.server.emit('newVenda', createdVenda);
  }

  @SubscribeMessage('vendaProcessada')
  async vendaProcessada(@Body() body) {
    const updatedVenda = await this.vendasService.updateVenda(body);
    console.log(updatedVenda)
  }
}