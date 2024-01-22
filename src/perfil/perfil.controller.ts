import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PerfilService } from './perfil.service';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Auth } from 'src/auth/decorators/auth.decorators';
import { mensajePropiedades, alertMessage } from 'src/utils/alertMessage';

@Controller('perfil')
export class PerfilController {
  constructor(private readonly perfilService: PerfilService) {}

  @Post()
  @Auth()
  async create(@Body() createPerfilDto: CreatePerfilDto) {
    try {
      return await this.perfilService.create(createPerfilDto);
    } catch (error) {
      return alertMessage['badSuccess'];
    }
  }

  @Get()
  @Auth()
  findAll() {
    try {
      return this.perfilService.findAll();
    } catch (error) {
      return alertMessage['badSuccess'];
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilDto: UpdatePerfilDto) {
    return this.perfilService.update(+id, updatePerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilService.remove(+id);
  }
}
