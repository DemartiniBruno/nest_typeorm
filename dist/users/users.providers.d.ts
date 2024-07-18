import { Users } from './user.entity';
import { DataSource } from 'typeorm';
export declare const UsersProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Users>;
    inject: string[];
}[];
