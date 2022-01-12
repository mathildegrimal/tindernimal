import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './schemas/animal.schema';
export declare class AnimalsController {
    private readonly animalsService;
    constructor(animalsService: AnimalsService);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    findAll(): Promise<Animal[]>;
    findOne(id: string): Promise<Animal>;
    findAllIsLoof(loof: boolean): Promise<Animal[]>;
    findAllByAge(age: number): Promise<Animal[]>;
    findAllByOwner(ownerId: string): Promise<Animal[]>;
    update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<Animal>;
    remove(id: string): Promise<Animal>;
}
