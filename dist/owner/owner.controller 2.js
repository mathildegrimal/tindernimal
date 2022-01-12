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
exports.OwnerController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const owner_service_1 = require("./owner.service");
const create_owner_dto_1 = require("./dto/create-owner.dto");
const update_owner_dto_1 = require("./dto/update-owner.dto");
const swagger_1 = require("@nestjs/swagger");
const owner_schema_1 = require("./schemas/owner.schema");
const mongoose_1 = require("mongoose");
let OwnerController = class OwnerController {
    constructor(ownerService) {
        this.ownerService = ownerService;
    }
    async create(createOwnerDto) {
        return this.ownerService.create(createOwnerDto);
    }
    findAll() {
        return this.ownerService.findAll();
    }
    findOne(id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        return this.ownerService.findOne(id);
    }
    update(id, updateOwnerDto) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        return this.ownerService.update(id, updateOwnerDto);
    }
    remove(id) {
        if (!(0, mongoose_1.isValidObjectId)(id)) {
            throw new common_1.BadRequestException('Invalid id');
        }
        try {
            const deletedOwner = this.ownerService.remove(id);
            return deletedOwner;
        }
        catch (e) {
            return e;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create owner' }),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'owner created',
        type: owner_schema_1.Owner,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'access denied',
    }),
    openapi.ApiResponse({ status: 201, type: require("./schemas/owner.schema").Owner }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_owner_dto_1.CreateOwnerDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns all the owners',
        type: [owner_schema_1.Owner],
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No owners',
    }),
    openapi.ApiResponse({ status: 200, type: [require("./schemas/owner.schema").Owner] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Returns the found owner',
        type: owner_schema_1.Owner,
    }),
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No owner with the given id',
    }),
    openapi.ApiResponse({ status: 200, type: require("./schemas/owner.schema").Owner }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No owner with the given id',
    }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Owner successfullly updated',
    }),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./schemas/owner.schema").Owner }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_owner_dto_1.UpdateOwnerDto]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiNoContentResponse)({
        status: 204,
        description: 'No owner with the given id',
    }),
    (0, swagger_1.ApiOkResponse)({
        status: 200,
        description: 'Owner successfullly deleted',
    }),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./schemas/owner.schema").Owner }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OwnerController.prototype, "remove", null);
OwnerController = __decorate([
    (0, common_1.Controller)('owner'),
    (0, swagger_1.ApiTags)('Owner'),
    __metadata("design:paramtypes", [owner_service_1.OwnerService])
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=owner.controller.js.map