import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Auth } from './decorators/auth.decorators';
import { UsuarioActivo } from '../common/decorators/usuarioActivo.decorators';
import { UsuarioActivoInterface } from '../interface/usuarioActivo.interface';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto,
  ) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(
    @Body()
    loginDto: LoginDto,
  ) {
    return this.authService.login(loginDto);
  }

  @Get('token')
  @Auth()
  token(@UsuarioActivo() usuario: UsuarioActivoInterface) {
    return this.authService.usuario(usuario);
  }
}
