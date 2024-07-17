import { DataSource } from 'typeorm';

export const Database = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'admin',
        database: 'mydb',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        migrations: ['dist/database/migrations/*{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
