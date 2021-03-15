import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PhotosEntity } from '../photos/photo.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;

  @OneToMany(type => PhotosEntity, photosEntity => photosEntity.user, {
    cascade: ['insert', 'update'],
    onDelete: 'CASCADE',
  })
  photos: PhotosEntity[];
}
