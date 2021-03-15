import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users.entity';
import { PhotosEntity } from '../photos/photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PhotosEntity])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
