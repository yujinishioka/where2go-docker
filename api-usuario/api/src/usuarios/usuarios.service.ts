import { Usuario } from './entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    const usuario = new Usuario();
    usuario.nome_usuario = createUsuarioDto.nome_usuario;
    usuario.email_usuario = createUsuarioDto.email_usuario;
    usuario.senha_usuario = createUsuarioDto.senha_usuario;
    usuario.telefone_usuario = createUsuarioDto.telefone_usuario;
    const aux = this.usuarioRepository.create(usuario);
    return aux;
  }

  findAll() {
    return this.usuarioRepository.find({
      order: { id_usuario: 'ASC' },
    });
  }

  findOne(id: number) {
    return this.usuarioRepository.findOne({
      where: { id_usuario: id },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = new Usuario();
    usuario.nome_usuario = updateUsuarioDto.nome_usuario;
    usuario.email_usuario = updateUsuarioDto.email_usuario;
    usuario.senha_usuario = updateUsuarioDto.senha_usuario;
    usuario.telefone_usuario = updateUsuarioDto.telefone_usuario;
    const aux = this.usuarioRepository.update(id, usuario);
    return aux;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
