import { DataSource } from 'typeorm';
import { Perfil } from './entities/perfil.entity';

export const perfilProviders = [
  {
    provide: 'PERFIL_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Perfil),
    inject: ['DATA_SOURCE'],
  },
];
