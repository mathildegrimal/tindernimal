import { Document, ObjectId } from 'mongoose';
export declare type OwnerDocument = Owner & Document;
export declare class Owner {
    _id: ObjectId;
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
}
export declare const OwnerSchema: import("mongoose").Schema<Document<Owner, any, any>, import("mongoose").Model<Document<Owner, any, any>, any, any, any>, any, any>;
