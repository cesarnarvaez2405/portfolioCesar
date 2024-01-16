import { DataSource } from 'typeorm';
import { Perfil } from './entities/perfil.entity';

export const perfilProviders = [
  {
    provide: 'EQUIPO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Perfil),
    inject: ['DATA_SOURCE'],
  },
];
