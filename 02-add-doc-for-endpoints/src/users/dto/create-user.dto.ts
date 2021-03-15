import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiModelProperty({
    description: 'The user email',
    required: true,
    type: String,
  })
  readonly email: string;
  @IsString()
  @IsNotEmpty()
  @ApiModelProperty({
    description: 'The user password',
    required: true,
    type: String,
  })
  readonly password: string;
}
