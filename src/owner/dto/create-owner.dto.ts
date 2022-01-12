import { IsString, IsArray } from 'class-validator';
import { Animal } from 'src/animals/schemas/animal.schema';

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
