import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SkillsPerfilService } from './skills-perfil.service';
import { UpdateSkillsPerfilDto } from './dto/update-skills-perfil.dto';
import { Auth } from '../auth/decorators/auth.decorators';
import { mensajePropiedades, alertMessage } from 'src/utils/alertMessage';

interface skillPerfil {
  skillsPerfil: any; // Reemplaza 'any' con el tipo correcto
  perfilId: number;
}

@Controller('skills')
export class SkillsPerfilController {
  constructor(private readonly skillsPerfilService: SkillsPerfilService) {}

  @Post()
  @Auth()
  async create(@Body() body: skillPerfil): Promise<mensajePropiedades> {
    try {
      const { skillsPerfil, perfilId } = body;
      await this.skillsPerfilService.create(skillsPerfil, perfilId);
      return alertMessage['addSuccess'];
    } catch (error) {
      return alertMessage['badSuccess'];
    }
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
  update(
    @Param('id') id: string,
    @Body() updateSkillsPerfilDto: UpdateSkillsPerfilDto,
  ) {
    return this.skillsPerfilService.update(+id, updateSkillsPerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.skillsPerfilService.remove(+id);
  }
}
