import { PartialType } from '@nestjs/mapped-types';
import { CreateSkillsPerfilDto } from './create-skills-perfil.dto';

export class UpdateSkillsPerfilDto extends PartialType(CreateSkillsPerfilDto) {}
