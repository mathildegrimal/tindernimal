import { IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsString()
  readonly birthDate: string;

  @IsString()
  readonly phoneNumber: string;
}
