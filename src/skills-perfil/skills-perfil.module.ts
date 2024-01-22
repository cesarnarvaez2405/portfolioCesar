import { Module } from '@nestjs/common';
import { SkillsPerfilService } from './skills-perfil.service';
import { SkillsPerfilController } from './skills-perfil.controller';
import { DatabaseModule } from '../config/configOrm.module';
import { skillsPerfilProviders } from './skills-perfil.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SkillsPerfilController],
  providers: [...skillsPerfilProviders, SkillsPerfilService],
  exports: [SkillsPerfilService],
})
export class SkillsPerfilModule {}
