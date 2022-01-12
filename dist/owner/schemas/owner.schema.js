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
exports.OwnerSchema = exports.Owner = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
let Owner = class Owner {
};
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    __metadata("design:type", Object)
], Owner.prototype, "_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Bobby', description: 'The first name of the owner' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Owner.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Dupont', description: 'The last name of the owner' }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Owner.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '09/02/1989',
        description: 'The birth date of the owner',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Owner.prototype, "birthDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0606060606',
        description: 'The phone number of the owner',
    }),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Owner.prototype, "phoneNumber", void 0);
Owner = __decorate([
    (0, mongoose_1.Schema)()
], Owner);
exports.Owner = Owner;
exports.OwnerSchema = mongoose_1.SchemaFactory.createForClass(Owner);
//# sourceMappingURL=owner.schema.js.map