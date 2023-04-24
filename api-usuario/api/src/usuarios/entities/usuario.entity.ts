import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 80 })
  nome_usuario: string;

  @Column({ length: 80 })
  email_usuario: string;

  @Column({ length: 80 })
  senha_usuario: string;

  @Column({ length: 80 })
  telefone_usuario: string;
}
