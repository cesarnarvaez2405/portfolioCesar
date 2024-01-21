import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { PerfilModule } from './perfil/perfil.module';
import { SkillsPerfilModule } from './skills-perfil/skills-perfil.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    UsuariosModule,
    AuthModule,
    PerfilModule,
    SkillsPerfilModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
