import { DataSource } from 'typeorm';
import { SkillsPerfil } from './entities/skills-perfil.entity';

export const skillsPerfilProviders = [
  {
    provide: 'SKILLS_PERFIL_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SkillsPerfil),
    inject: ['DATA_SOURCE'],
  },
];
