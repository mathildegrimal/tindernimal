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
exports.AnimalsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const animals_service_1 = require("./animals.service");
const create_animal_dto_1 = require("./dto/create-animal.dto");
const update_animal_dto_1 = require("./dto/update-animal.dto");
const swagger_1 = require("@nestjs/swagger");
const animal_schema_1 = require("./schemas/animal.schema");
const mongoose_1 = require("mongoose");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let AnimalsController = class AnimalsController {
    constructor(animalsService) {
        this.animalsService = animalsService;
    }
    create(createAnimalDto) {
        return this.animalsService.create(createAnimalDto);
    }
    async findAll() {
        return await this.animalsService.findAll();
    }
    async findOne(id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        return await this.animalsService.findOne(id);
    }
    async findAllIsLoof(loof) {
        return await this.animalsService.findAllIsLoof(loof);
    }
    findAllByAge(age) {
        return this.animalsService.findAllByAge(age);
    }
    findAllByOwner(ownerId) {
        return this.animalsService.findAllByOwner(ownerId);
    }
    update(id, updateAnimalDto) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        return this.animalsService.update(id, updateAnimalDto);
    }
    remove(id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        return this.animalsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create animal' }),
    (0, swagger_1.ApiCreatedResponse)({
        status: 200,
        description: 'Animal created',
        type: animal_schema_1.Animal,
    }),
    openapi.ApiResponse({ status: 201, type: require("./schemas/animal.schema").Animal }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all animals' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns all dog',
        type: [animal_schema_1.Animal],
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animals',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/animal.schema").Animal] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('id/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get animal by id' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns one dog by id',
        type: animal_schema_1.Animal,
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given id',
    }),
    openapi.ApiResponse({ status: 200, type: require("./schemas/animal.schema").Animal }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('loof/:loof'),
    (0, swagger_1.ApiOperation)({ summary: 'Get animals by LOOF' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns all animals by loof',
        type: [animal_schema_1.Animal],
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given loof',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/animal.schema").Animal] }),
    __param(0, (0, common_1.Param)('loof')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findAllIsLoof", null);
__decorate([
    (0, common_1.Get)('age/:age'),
    (0, swagger_1.ApiOperation)({ summary: 'Get animals by age' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns all animals by age',
        type: [animal_schema_1.Animal],
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given age',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/animal.schema").Animal] }),
    __param(0, (0, common_1.Param)('age')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findAllByAge", null);
__decorate([
    (0, common_1.Get)('owner/:owner'),
    (0, swagger_1.ApiOperation)({ summary: 'Get animals by owner' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns all animals by owner',
        type: [animal_schema_1.Animal],
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given owner',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/animal.schema").Animal] }),
    __param(0, (0, common_1.Param)('owner')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "findAllByOwner", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update animal' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'update one dog by id and return the dog',
        type: animal_schema_1.Animal,
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given id',
    }),
    openapi.ApiResponse({ status: 200, type: require("./schemas/animal.schema").Animal }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_animal_dto_1.UpdateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete animal' }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'delete one dog by id and return the dog',
        type: animal_schema_1.Animal,
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No animal with the given id',
    }),
    openapi.ApiResponse({ status: 200, type: require("./schemas/animal.schema").Animal }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalsController.prototype, "remove", null);
AnimalsController = __decorate([
    (0, common_1.Controller)('animals'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiTags)('Animals'),
    __metadata("design:paramtypes", [animals_service_1.AnimalsService])
], AnimalsController);
exports.AnimalsController = AnimalsController;
//# sourceMappingURL=animals.controller.js.map