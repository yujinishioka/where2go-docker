import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    id: number;
    nome_usuario: string;
    email_usuario: string;
    senha_usuario: string;
    telefone_usuario: string;
}
