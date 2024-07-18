"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendasProviders = void 0;
const venda_entity_1 = require("./venda.entity");
exports.VendasProviders = [{
        provide: 'VENDAS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(venda_entity_1.Vendas),
        inject: ['DATA_SOURCE'],
    }];
//# sourceMappingURL=vendas.providers.js.map