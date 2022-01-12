import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerDto } from './create-owner.dto';
import { IsString } from 'class-validator';
export class UpdateOwnerDto extends PartialType(CreateOwnerDto) {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsString()
  birthDate?: string;

  @IsString()
  phoneNumber?: string;
}
