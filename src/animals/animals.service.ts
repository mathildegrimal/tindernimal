import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Animal } from './entities/animal.entity';
import { Model } from 'mongoose';
import { AnimalDocument } from './schemas/animal.schema';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
  ) {}

  create(createAnimalDto: CreateAnimalDto) {
    const createdAnimal = new this.animalModel(createAnimalDto);
    return createdAnimal.save();
  }

  findAll() {
    return this.animalModel.find().exec();
  }

  findOne(id: number) {
    return this.animalModel.findOne({ id: id }).exec();
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return this.animalModel.updateOne({ id: id }, updateAnimalDto).exec();
  }

  remove(id: number) {
    return this.animalModel.findByIdAndRemove(id).exec();
  }

  findAllIsLoof(isLoof: boolean) {
    return this.animalModel.find({ loof: isLoof }).exec();
  }

  findAllByAge(age: number) {
    return this.animalModel.find({ age: age }).exec();
  }
}
