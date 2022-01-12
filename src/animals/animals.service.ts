import { Injectable } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal, AnimalDocument } from './schemas/animal.schema';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectModel(Animal.name) private animalModel: Model<AnimalDocument>,
  ) {}

  async create(createAnimalDto: CreateAnimalDto) {
    const createdAnimal = new this.animalModel(createAnimalDto);
    return await createdAnimal.save();
  }

  async findAll(): Promise<Animal[]> {
    return await this.animalModel.find().populate('owner');
  }

  async findOne(id: string) {
    return await this.animalModel.findOne({ id: id }).exec();
  }

  async update(id: string, updateAnimalDto: UpdateAnimalDto) {
    const animal = await this.animalModel.findByIdAndUpdate(
      id,
      updateAnimalDto,
    );
    console.log(animal);
    return animal;
  }

  async remove(id: string) {
    return await this.animalModel.findByIdAndRemove(id).exec();
  }

  async findAllIsLoof(isLoof: boolean) {
    return await this.animalModel.find({ loof: isLoof }).exec();
  }

  async findAllByAge(age: number) {
    return await this.animalModel.find({ age: age }).exec();
  }

  async findAllByOwner(ownerId: string) {
    const animals = await this.animalModel.find({ owner: ownerId }).exec();
    return animals;
  }
}
