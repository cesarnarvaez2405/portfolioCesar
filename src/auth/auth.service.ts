import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async register(usuario) {
    const { email } = usuario;
    const usuarioCreado = await this.usuariosService.buscarPorEmail(email);
    if (usuarioCreado) {
      throw new BadRequestException('Usuario ya existe');
    }
    usuario.password = await bcrypt.hash(usuario.password, 10);
    return await this.usuariosService.create(usuario);
  }

  async login(usuario) {
    const { email, password } = usuario;
    const usuarioCreado =
      await this.usuariosService.buscarPorEmailYPassword(email);
    if (!usuarioCreado) {
      throw new BadRequestException('El usuario no existe');
    }
    const passwordValido = await bcrypt.compare(
      password,
      usuarioCreado.password,
    );
    if (!passwordValido) {
      throw new UnauthorizedException('La constraseña no existe');
    }
    const payload = { email: usuarioCreado.email, rol: usuarioCreado.rol_id };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      payload,
    };
  }

  async usuario(usuario) {
    const { email } = usuario;
    return await this.usuariosService.buscarPorEmail(email);
  }
}
