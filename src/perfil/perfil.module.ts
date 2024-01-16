import { Module } from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { PerfilController } from './perfil.controller';
import { DatabaseModule } from '../config/configOrm.module';
import { perfilProviders } from './perfil.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [PerfilController],
  providers: [...perfilProviders, PerfilService],
  exports: [PerfilService],
})
export class PerfilModule {}
