import { IsNotEmpty, IsString, IsEmail, IsArray } from 'class-validator';
import { PhotosEntity } from 'src/photos/photo.entity';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;

  @IsArray()
  photos: PhotosEntity[];
}
