"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_service_1 = require("./users/users.service");
const users_module_1 = require("./users/users.module");
const animals_module_1 = require("./animals/animals.module");
const mongoose_1 = require("@nestjs/mongoose");
const owner_module_1 = require("./owner/owner.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            auth_module_1.AuthModule,
            owner_module_1.OwnerModule,
            users_module_1.UsersModule,
            animals_module_1.AnimalsModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}${process.env.DB_HOST}/myFirstDatabase?retryWrites=true&w=majority`),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, users_service_1.UsersService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map