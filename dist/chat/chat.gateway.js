"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const vendas_service_1 = require("../vendas/vendas.service");
const chat_service_1 = require("./chat.service");
const common_1 = require("@nestjs/common");
let ChatGateway = class ChatGateway {
    constructor(chatService, vendasService) {
        this.chatService = chatService;
        this.vendasService = vendasService;
    }
    async handleConnection(client, ...args) {
        console.log('conectado');
    }
    handleDisconnect(client) {
        console.log('desconectado');
    }
    async newVenda(body) {
        const createdVenda = await this.vendasService.createVenda(body);
        this.server.emit('newVenda', createdVenda);
    }
    async vendaProcessada(body) {
        const updatedVenda = await this.vendasService.updateVenda(body);
        console.log(updatedVenda);
    }
};
exports.ChatGateway = ChatGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('newVenda'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "newVenda", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('vendaProcessada'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "vendaProcessada", null);
exports.ChatGateway = ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8085, {
        cors: {
            origin: '*',
        },
    }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_service_1.ChatService,
        vendas_service_1.VendasService])
], ChatGateway);
//# sourceMappingURL=chat.gateway.js.map