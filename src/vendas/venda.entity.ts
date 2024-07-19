import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'vendas'})
export class Vendas {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name:'description', nullable:false})
    description: string;

    @Column({name:'value', nullable:false})
    value: number;

    @Column({name:'status', default:0})
    status: number;
}
