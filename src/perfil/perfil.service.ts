import { Inject, Injectable } from '@nestjs/common';
import { CreatePerfilDto } from './dto/create-perfil.dto';
import { UpdatePerfilDto } from './dto/update-perfil.dto';
import { Perfil } from './entities/perfil.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PerfilService {
  constructor(
    @Inject('PERFIL_REPOSITORY')
    private equipoRepository: Repository<Perfil>,
  ) {}
  async create(createPerfilDto: CreatePerfilDto) {
    const perfil = this.equipoRepository.create(createPerfilDto);
    return await this.equipoRepository.save(perfil);
  }

  async findAll() {
    return await this.equipoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} perfil`;
  }

  update(id: number, updatePerfilDto: UpdatePerfilDto) {
    return `This action updates a #${id} perfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfil`;
  }
}
