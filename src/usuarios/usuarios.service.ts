import { Inject, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuarioDto);
    return this.usuarioRepository.save(usuario);
  }

  async findAll() {
    return this.usuarioRepository.find();
  }

  async buscarPorEmail(email: string) {
    return this.usuarioRepository.findOneBy({
      email,
    });
  }

  async buscarPorEmailYPassword(email: string) {
    return this.usuarioRepository.findOne({
      where: { email },
      select: ['RowId', 'nombre', 'email', 'password', 'rol_id', 'esta_activo'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
