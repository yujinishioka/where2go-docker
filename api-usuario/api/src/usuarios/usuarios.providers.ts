import { Usuario } from './entities/usuario.entity';
import { DataSource } from 'typeorm';

export const UsuariosProviders = [
  {
    provide: 'USUARIOS_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Usuario),
    inject: ['DATA_SOURCE'],
  },
];
