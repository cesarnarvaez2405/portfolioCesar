import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/config/configOrm.module';
import { usuariosProviders } from './usuarios.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [...usuariosProviders, UsuariosService],
})
export class UsuariosModule {}
