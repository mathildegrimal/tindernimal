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
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Animal } from './schemas/animal.schema';
import { isValidObjectId } from 'mongoose';

@Controller('animals')
@ApiTags('Animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @ApiOperation({ summary: 'Create animal' })
  @ApiCreatedResponse({
    status: 200,
    description: 'Animal created',
    type: Animal,
  })
  create(@Body() createAnimalDto: CreateAnimalDto): Promise<Animal> {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all animals' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns all dog',
    type: [Animal],
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animals',
  })
  async findAll(): Promise<Animal[]> {
    return await this.animalsService.findAll();
  }

  @Get('id/:id')
  @ApiOperation({ summary: 'Get animal by id' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns one dog by id',
    type: Animal,
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given id',
  })
  async findOne(@Param('id') id: string): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    return await this.animalsService.findOne(id);
  }
  @Get('loof/:loof')
  @ApiOperation({ summary: 'Get animals by LOOF' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns all animals by loof',
    type: [Animal],
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given loof',
  })
  async findAllIsLoof(@Param('loof') loof: boolean): Promise<Animal[]> {
    return await this.animalsService.findAllIsLoof(loof);
  }

  @Get('age/:age')
  @ApiOperation({ summary: 'Get animals by age' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns all animals by age',
    type: [Animal],
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given age',
  })
  findAllByAge(@Param('age') age: number): Promise<Animal[]> {
    return this.animalsService.findAllByAge(age);
  }

  @Get('owner/:owner')
  @ApiOperation({ summary: 'Get animals by owner' })
  @ApiOkResponse({
    status: 200,
    description: 'Returns all animals by owner',
    type: [Animal],
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given owner',
  })
  findAllByOwner(@Param('owner') ownerId: string): Promise<Animal[]> {
    return this.animalsService.findAllByOwner(ownerId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update animal' })
  @ApiOkResponse({
    status: 200,
    description: 'update one dog by id and return the dog',
    type: Animal,
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given id',
  })
  update(
    @Param('id') id: string,
    @Body() updateAnimalDto: UpdateAnimalDto,
  ): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    return this.animalsService.update(id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete animal' })
  @ApiOkResponse({
    status: 200,
    description: 'delete one dog by id and return the dog',
    type: Animal,
  })
  @ApiNoContentResponse({
    status: 204,
    description: 'No animal with the given id',
  })
  remove(@Param('id') id: string): Promise<Animal> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException('Invalid id');
    }
    return this.animalsService.remove(id);
  }
}
