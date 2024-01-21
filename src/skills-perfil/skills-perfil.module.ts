import { Module } from '@nestjs/common';
import { SkillsPerfilService } from './skills-perfil.service';
import { SkillsPerfilController } from './skills-perfil.controller';

@Module({
  controllers: [SkillsPerfilController],
  providers: [SkillsPerfilService],
})
export class SkillsPerfilModule {}
