import { IsInt, IsString, IsBoolean } from 'class-validator';

export class CreateAnimalDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;

  @IsBoolean()
  readonly loof: boolean;

  @IsString()
  readonly owner: string;
}
