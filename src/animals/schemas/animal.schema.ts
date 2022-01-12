import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Owner } from 'src/owner/schemas/owner.schema';
import { Transform, Type } from 'class-transformer';
export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @ApiProperty({
    example: 'Bobby',
    description: 'The name of the animal',
  })
  @Prop()
  name: string;

  @ApiProperty({
    example: '2',
    description: 'The age of the animal',
  })
  @Prop()
  age: number;

  @ApiProperty({
    example: 'Chihuaha',
    description: 'The breed of the animal',
  })
  @Prop()
  breed: string;

  @ApiProperty({
    example: true,
    description: 'Says if the animal is LOOF or not',
  })
  @Prop()
  loof: boolean;

  @ApiProperty({ description: 'The owner of the animal' })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Owner.name })
  @Type(() => Owner)
  owner: Owner;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
