"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotModifiedException = void 0;
const common_1 = require("@nestjs/common");
class NotModifiedException extends common_1.HttpException {
    constructor() {
        super('No owner with the given id', common_1.HttpStatus.NO_CONTENT);
    }
}
exports.NotModifiedException = NotModifiedException;
//# sourceMappingURL=notmodified.exception.js.map