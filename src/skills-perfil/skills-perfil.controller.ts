import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SkillsPerfilService } from './skills-perfil.service';
import { CreateSkillsPerfilDto } from './dto/create-skills-perfil.dto';
import { UpdateSkillsPerfilDto } from './dto/update-skills-perfil.dto';

@Controller('skills-perfil')
export class SkillsPerfilController {
  constructor(private readonly skillsPerfilService: SkillsPerfilService) {}

  @Post()
  create(@Body() createSkillsPerfilDto: CreateSkillsPerfilDto) {
    return this.skillsPerfilService.create(createSkillsPerfilDto);
  }

  @Get()
  findAll() {
    return this.skillsPerfilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.skillsPerfilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSkillsPerfilDto: UpdateSkillsPerfilDto) {
    return this.skillsPerfilService.update(+id, updateSkillsPerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsPerfilService.remove(+id);
  }
}
