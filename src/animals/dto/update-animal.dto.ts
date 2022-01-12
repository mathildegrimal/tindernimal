import { PartialType } from '@nestjs/mapped-types';
import { CreateAnimalDto } from './create-animal.dto';
import { IsInt, IsString, IsBoolean } from 'class-validator';

export class UpdateAnimalDto extends PartialType(CreateAnimalDto) {
  @IsString()
  name?: string;

  @IsInt()
  age?: number;

  @IsString()
  breed?: string;

  @IsBoolean()
  loof?: boolean;

  @IsString()
  owner?: string;
}
