"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const animal_schema_1 = require("./schemas/animal.schema");
let AnimalsService = class AnimalsService {
    constructor(animalModel) {
        this.animalModel = animalModel;
    }
    async create(createAnimalDto) {
        const createdAnimal = new this.animalModel(createAnimalDto);
        return await createdAnimal.save();
    }
    async findAll() {
        return await this.animalModel.find().populate('owner');
    }
    async findOne(id) {
        return await this.animalModel.findOne({ id: id }).exec();
    }
    async update(id, updateAnimalDto) {
        const animal = await this.animalModel.findByIdAndUpdate(id, updateAnimalDto);
        console.log(animal);
        return animal;
    }
    async remove(id) {
        return await this.animalModel.findByIdAndRemove(id).exec();
    }
    async findAllIsLoof(isLoof) {
        return await this.animalModel.find({ loof: isLoof }).exec();
    }
    async findAllByAge(age) {
        return await this.animalModel.find({ age: age }).exec();
    }
    async findAllByOwner(ownerId) {
        const animals = await this.animalModel.find({ owner: ownerId }).exec();
        return animals;
    }
};
AnimalsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(animal_schema_1.Animal.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnimalsService);
exports.AnimalsService = AnimalsService;
//# sourceMappingURL=animals.service.js.map