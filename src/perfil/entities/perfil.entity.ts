import { Column, Entity, OneToMany } from 'typeorm';
import { entityBase } from '../../utils/entityBase';
import { SkillsPerfil } from '../../skills-perfil/entities/skills-perfil.entity';

@Entity()
export class Perfil extends entityBase {
  @Column()
  titulo: string;

  @Column({ type: 'character varying' })
  descripcion: string;

  @Column()
  foto: string;

  @OneToMany(() => SkillsPerfil, (skill) => skill.perfil)
  skills: SkillsPerfil[];
}
