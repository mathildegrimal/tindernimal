import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Animal } from '../entities/animal.entity';

export type AnimalDocument = Animal & Document;

@Schema()
export class Cat {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;

  @Prop()
  loof: boolean;
}

export const AnimalSchema = SchemaFactory.createForClass(Cat);
