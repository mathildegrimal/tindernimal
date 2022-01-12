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
exports.Animal = void 0;
const swagger_1 = require("@nestjs/swagger");
class Animal {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Youyou', description: 'The name of the Cat' }),
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3, description: 'The age of the Cat' }),
    __metadata("design:type", Number)
], Animal.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Pinscher', description: 'The breed of the Cat' }),
    __metadata("design:type", String)
], Animal.prototype, "breed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true, description: 'is it loof ?' }),
    __metadata("design:type", Boolean)
], Animal.prototype, "loof", void 0);
exports.Animal = Animal;
//# sourceMappingURL=animal.entity.js.map