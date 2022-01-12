import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Animal } from 'src/animals/schemas/animal.schema';
import { NotModifiedException } from 'src/exceptions/notmodified.exception';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner, OwnerDocument } from './schemas/owner.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async create(owner: CreateOwnerDto): Promise<Owner> {
    console.log('owner from dto', owner);
    const createdOwner = this.ownerModel.create(owner);
    return createdOwner;
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.find();
  }

  async findOne(id: string): Promise<Owner> {
    const foundOwner = await this.ownerModel.findById(id).exec();
    console.log(foundOwner);
    return foundOwner;
  }

  async update(id: string, updateOwnerDto: UpdateOwnerDto) {
    const owner = await this.ownerModel.findByIdAndUpdate(id, updateOwnerDto);
    if (owner != null) {
      return await this.ownerModel.findById(id);
    } else {
      throw new NotModifiedException();
    }
  }

  async remove(id: string): Promise<Owner> {
    const owner = await this.ownerModel.findByIdAndDelete(id);
    console.log(owner);
    if (owner != null) {
      return owner;
    } else {
      throw new NotModifiedException();
    }
  }
}
