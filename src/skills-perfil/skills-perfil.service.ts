import { Injectable } from '@nestjs/common';
import { CreateSkillsPerfilDto } from './dto/create-skills-perfil.dto';
import { UpdateSkillsPerfilDto } from './dto/update-skills-perfil.dto';

@Injectable()
export class SkillsPerfilService {
  create(createSkillsPerfilDto: CreateSkillsPerfilDto) {
    return 'This action adds a new skillsPerfil';
  }

  findAll() {
    return `This action returns all skillsPerfil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} skillsPerfil`;
  }

  update(id: number, updateSkillsPerfilDto: UpdateSkillsPerfilDto) {
    return `This action updates a #${id} skillsPerfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} skillsPerfil`;
  }
}
