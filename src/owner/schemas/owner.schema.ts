import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
export type OwnerDocument = Owner & Document;
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
@Schema()
export class Owner {
  /**
   * The name of the Owner
   * @example Bobby
   */
  @Transform(({ value }) => value.toString())
  _id: ObjectId;

  @ApiProperty({ example: 'Bobby', description: 'The first name of the owner' })
  @Prop()
  firstName: string;

  @ApiProperty({ example: 'Dupont', description: 'The last name of the owner' })
  @Prop()
  lastName: string;

  @ApiProperty({
    example: '09/02/1989',
    description: 'The birth date of the owner',
  })
  @Prop()
  birthDate: string;

  @ApiProperty({
    example: '0606060606',
    description: 'The phone number of the owner',
  })
  @Prop()
  phoneNumber: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
