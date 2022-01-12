import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Owner } from './schemas/owner.schema';
import { isValidObjectId, ObjectId } from 'mongoose';

@Controller('owner')
@ApiTags('Owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @ApiOperation({ summary: 'Create owner' })
  @ApiCreatedResponse({
    description: 'owner created',
    type: Owner,
  })
  @ApiResponse({
    status: 401,
    description: 'access denied',
  })
  async create(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  @ApiOkResponse({
    status: 200,
    description: 'Returns all the owners',
    type: [Owner],
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No owners',
  })
  findAll(): Promise<Owner[]> {
    return this.ownerService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    status: 200,
    description: 'Returns the found owner',
    type: Owner,
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No owner with the given id',
  })
  findOne(@Param('id') id: string): Promise<Owner> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    return this.ownerService.findOne(id);
  }

  @ApiNoContentResponse({
    status: 204,
    description: 'No owner with the given id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Owner successfullly updated',
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOwnerDto: UpdateOwnerDto,
  ): Promise<Owner> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    return this.ownerService.update(id, updateOwnerDto);
  }

  @ApiNoContentResponse({
    status: 204,
    description: 'No owner with the given id',
  })
  @ApiOkResponse({
    status: 200,
    description: 'Owner successfullly deleted',
  })
  @Delete(':id')
  remove(@Param('id') id: string): Promise<Owner> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    try {
      const deletedOwner = this.ownerService.remove(id);
      return deletedOwner;
    } catch (e) {
      return e;
    }
  }
}
