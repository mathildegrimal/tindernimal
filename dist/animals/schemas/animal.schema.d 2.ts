import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Owner } from 'src/owner/schemas/owner.schema';
export declare type AnimalDocument = Animal & Document;
export declare class Animal {
    _id: ObjectId;
    name: string;
    age: number;
    breed: string;
    loof: boolean;
    owner: Owner;
}
export declare const AnimalSchema: mongoose.Schema<Document<Animal, any, any>, mongoose.Model<Document<Animal, any, any>, any, any, any>, any, any>;
