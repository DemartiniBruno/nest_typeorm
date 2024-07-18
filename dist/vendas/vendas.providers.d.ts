import { Vendas } from './venda.entity';
import { DataSource } from 'typeorm';
export declare const VendasProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Vendas>;
    inject: string[];
}[];
