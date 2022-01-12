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
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const notmodified_exception_1 = require("../exceptions/notmodified.exception");
const owner_schema_1 = require("./schemas/owner.schema");
let OwnerService = class OwnerService {
    constructor(ownerModel) {
        this.ownerModel = ownerModel;
    }
    async create(owner) {
        console.log('owner from dto', owner);
        const createdOwner = this.ownerModel.create(owner);
        return createdOwner;
    }
    async findAll() {
        return this.ownerModel.find();
    }
    async findOne(id) {
        const foundOwner = await this.ownerModel.findById(id).exec();
        console.log(foundOwner);
        return foundOwner;
    }
    async update(id, updateOwnerDto) {
        const owner = await this.ownerModel.findByIdAndUpdate(id, updateOwnerDto);
        if (owner != null) {
            return await this.ownerModel.findById(id);
        }
        else {
            throw new notmodified_exception_1.NotModifiedException();
        }
    }
    async remove(id) {
        const owner = await this.ownerModel.findByIdAndDelete(id);
        console.log(owner);
        if (owner != null) {
            return owner;
        }
        else {
            throw new notmodified_exception_1.NotModifiedException();
        }
    }
};
OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(owner_schema_1.Owner.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OwnerService);
exports.OwnerService = OwnerService;
//# sourceMappingURL=owner.service.js.map