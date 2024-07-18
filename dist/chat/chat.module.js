"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gateway_1 = require("./chat.gateway");
const vendas_service_1 = require("../vendas/vendas.service");
const database_module_1 = require("../database/database.module");
const vendas_providers_1 = require("../vendas/vendas.providers");
const chat_service_1 = require("./chat.service");
let ChatModule = class ChatModule {
};
exports.ChatModule = ChatModule;
exports.ChatModule = ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        providers: [chat_gateway_1.ChatGateway, chat_service_1.ChatService, vendas_service_1.VendasService, ...vendas_providers_1.VendasProviders],
        exports: [chat_gateway_1.ChatGateway]
    })
], ChatModule);
//# sourceMappingURL=chat.module.js.map