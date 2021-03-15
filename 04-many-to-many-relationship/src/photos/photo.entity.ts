import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserEntity } from '../users/users.entity';

@Entity({ name: 'photos' })
export class PhotosEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  url: string;
  @ManyToOne(type => UserEntity, userEntity => userEntity.photos, {
    onDelete: 'CASCADE',
  })
  user: UserEntity;
}
