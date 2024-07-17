import { Vendas } from './venda.entity';
import { DataSource } from 'typeorm';

export const VendasProviders = [{
    provide: 'VENDAS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Vendas),
    inject: ['DATA_SOURCE'],
}]