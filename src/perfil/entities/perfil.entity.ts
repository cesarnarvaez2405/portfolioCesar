import { Column, Entity } from 'typeorm';
import { entityBase } from '../../utils/entityBase';

@Entity()
export class Perfil extends entityBase {
  @Column()
  titulo: string;

  @Column({ type: 'character varying' })
  descripcion: string;

  @Column()
  foto: string
}
