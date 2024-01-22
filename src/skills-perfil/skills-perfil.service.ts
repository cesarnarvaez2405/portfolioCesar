import { Inject, Injectable } from '@nestjs/common';
import { UpdateSkillsPerfilDto } from './dto/update-skills-perfil.dto';
import { Repository } from 'typeorm';
import { SkillsPerfil } from './entities/skills-perfil.entity';

@Injectable()
export class SkillsPerfilService {
  constructor(
    @Inject('SKILLS_PERFIL_REPOSITORY')
    private skillRepository: Repository<SkillsPerfil>,
  ) {}
  async create(skillsPerfil: any[], perfilId: number) {
    const skills = [];

    skillsPerfil.map((skill) =>
      skills.push({
        skillId: skill,
        perfil: perfilId,
      }),
    );
    await this.skillRepository
      .createQueryBuilder()
      .insert()
      .into(SkillsPerfil)
      .values([...skills])
      .execute();

    return skills;
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
