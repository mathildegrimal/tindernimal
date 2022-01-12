import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Model } from 'mongoose';
import { Animal, AnimalDocument } from './schemas/animal.schema';
export declare class AnimalsService {
    private animalModel;
    constructor(animalModel: Model<AnimalDocument>);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAll(): Promise<Animal[]>;
    findOne(id: string): Promise<Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    remove(id: string): Promise<Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    findAllIsLoof(isLoof: boolean): Promise<(Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAllByAge(age: number): Promise<(Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
    findAllByOwner(ownerId: string): Promise<(Animal & import("mongoose").Document<any, any, any> & {
        _id: any;
    })[]>;
}
