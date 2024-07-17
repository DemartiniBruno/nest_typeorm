import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { VendasService } from './vendas.service';

@Controller('vendas')
export class VendasController {
    constructor(
        private readonly VendasService: VendasService
    ) {}

    @Get()
    async findAllVendas(@Res() response){
        return response.status(200).json(await this.VendasService.findAllVendas());
    }

    @Post()
    async createVenda (@Res() response, @Body() body){
        const createdVenda = await this.VendasService.createVenda(body);
        return response.status(201).json(createdVenda);
    }

}
