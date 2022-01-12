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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalSchema = exports.Animal = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const mongoose = require("mongoose");
const owner_schema_1 = require("../../owner/schemas/owner.schema");
const class_transformer_1 = require("class-transformer");
let Animal = class Animal {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Animal.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Bobby',
        description: 'The name of the animal',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2',
        description: 'The age of the animal',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Animal.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Chihuaha',
        description: 'The breed of the animal',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Animal.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: true,
        description: 'Says if the animal is LOOF or not',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Boolean)
], Animal.prototype, "loof", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The owner of the animal' }),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: owner_schema_1.Owner.name }),
    (0, class_transformer_1.Type)(() => owner_schema_1.Owner),
    __metadata("design:type", owner_schema_1.Owner)
], Animal.prototype, "owner", void 0);
Animal = __decorate([
    (0, mongoose_1.Schema)()
], Animal);
exports.Animal = Animal;
exports.AnimalSchema = mongoose_1.SchemaFactory.createForClass(Animal);
//# sourceMappingURL=animal.schema.js.map