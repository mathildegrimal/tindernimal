import { ApiProperty } from '@nestjs/swagger';

export class Animal {
  @ApiProperty({ example: 'Youyou', description: 'The name of the Cat' })
  name: string;
  @ApiProperty({ example: 3, description: 'The age of the Cat' })
  age: number;
  @ApiProperty({ example: 'Pinscher', description: 'The breed of the Cat' })
  breed: string;
  @ApiProperty({ example: true, description: 'is it loof ?' })
  loof: boolean;
}
