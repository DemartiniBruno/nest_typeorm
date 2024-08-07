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
exports.VendasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let VendasService = class VendasService {
    constructor(vendasRepository) {
        this.vendasRepository = vendasRepository;
    }
    async findVenda(body) {
        const venda = await this.vendasRepository.findOne({
            where: {
                id: body
            }
        });
        return venda;
    }
    async findAllVendas() {
        return this.vendasRepository.find();
    }
    async createVenda(body) {
        const createdVenda = await this.vendasRepository.save({
            description: body.description,
            value: body.value
        });
        return createdVenda;
    }
    async updateVenda(body) {
        const updatedVenda = await this.vendasRepository.update(body, {
            status: 1,
        });
        return await this.findVenda(body);
    }
};
exports.VendasService = VendasService;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VendasService.prototype, "findVenda", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VendasService.prototype, "createVenda", null);
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], VendasService.prototype, "updateVenda", null);
exports.VendasService = VendasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('VENDAS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VendasService);
//# sourceMappingURL=vendas.service.js.map