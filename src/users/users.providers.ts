import { Users } from './user.entity';
import { DataSource } from 'typeorm';

export const UsersProviders = [{
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
}]