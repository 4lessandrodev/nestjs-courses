import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsNumber,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
  @IsNotEmpty()
  @IsInt()
  readonly qty: number;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly partNumber: string;

  @IsOptional()
  @IsString()
  readonly dimension: string;

  @IsOptional()
  @IsInt()
  readonly weight: number;

  @IsOptional()
  @IsString()
  readonly manufacturer: string;

  @IsOptional()
  @IsString()
  readonly origin: string;
}
