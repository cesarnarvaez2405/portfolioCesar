import { entityBase } from '../../utils/entityBase';
import { Column, Entity } from 'typeorm';

@Entity()
export class Usuario extends entityBase {
  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false, select: false })
  password: string;

  @Column()
  nombre: string;

  @Column({ type: 'numeric' })
  telefono: number;

  @Column({ nullable: false})
  rol_id: string;

  @Column({ type: Boolean, default: true })
  esta_activo: boolean;
}
