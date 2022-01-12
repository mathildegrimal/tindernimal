import { Model } from 'mongoose';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner, OwnerDocument } from './schemas/owner.schema';
export declare class OwnerService {
    private ownerModel;
    constructor(ownerModel: Model<OwnerDocument>);
    create(owner: CreateOwnerDto): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<Owner & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Owner>;
}
