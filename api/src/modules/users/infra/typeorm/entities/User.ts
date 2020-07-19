import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

import { Exclude, Expose } from 'class-transformer';
import Pet from '@modules/pets/infra/typeorm/entities/Pet';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  avatar: string;

  @OneToMany(type => Pet, user => User)
  pets: Pet[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: 'avatar_url' })
  getavatar_url(): string | null {
    return this.avatar
      ? `${process.env.APP_API_URL}/files/${this.avatar}`
      : null;
  }
}

export default User;
