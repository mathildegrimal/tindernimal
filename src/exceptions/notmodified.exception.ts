import { HttpException, HttpStatus } from '@nestjs/common';

export class NotModifiedException extends HttpException {
  constructor() {
    super('No owner with the given id', HttpStatus.NO_CONTENT);
  }
}
