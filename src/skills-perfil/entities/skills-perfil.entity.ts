import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { entityBase } from '../../utils/entityBase';
import { Perfil } from '../../perfil/entities/perfil.entity';

@Entity()
export class SkillsPerfil extends entityBase {
  @Column({ nullable: false, name: 'skill_id' })
  skillId: string;

  @ManyToOne(() => Perfil, (perfil) => perfil.RowId)
  @JoinColumn({ name: 'perfil_id' })
  perfil: Perfil;
}
