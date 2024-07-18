"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersProviders = void 0;
const user_entity_1 = require("./user.entity");
exports.UsersProviders = [{
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(user_entity_1.Users),
        inject: ['DATA_SOURCE'],
    }];
//# sourceMappingURL=users.providers.js.map