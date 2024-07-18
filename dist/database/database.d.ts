import { DataSource } from 'typeorm';
export declare const Database: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];
