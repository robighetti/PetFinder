import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from '../../../../users/infra/typeorm/entities/User';

@Entity('pets')
class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  race: string;

  @Column()
  age: number;

  @Column()
  weight: number;

  @Column()
  city: string;

  @Column()
  photo: string;

  @Column()
  user_id: string;

  @ManyToOne(type => User, pets => Pet, { eager: true })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Pet;
