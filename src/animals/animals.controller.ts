import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalsService } from './animals.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Animal } from './entities/animal.entity';

@Controller('animals')
@ApiTags('Animals')
export class AnimalsController {
  constructor(private readonly animalsService: AnimalsService) {}

  @Post()
  @ApiCreatedResponse({
    status: 200,
    description: 'create the dog and return',
    type: Animal,
  })
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalsService.create(createAnimalDto);
  }

  @Get()
  @ApiCreatedResponse({
    status: 200,
    description: 'return all dog',
    type: [Animal],
  })
  findAll() {
    return this.animalsService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({
    status: 200,
    description: 'return one dog by id',
    type: Animal,
  })
  findOne(@Param('id') id: string) {
    return this.animalsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({
    status: 200,
    description: 'update one dog by id and return the dog',
    type: Animal,
  })
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalsService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({
    status: 200,
    description: 'delete one dog by id and return the dog',
    type: Animal,
  })
  remove(@Param('id') id: string) {
    return this.animalsService.remove(+id);
  }

  @Get(':loof')
  @ApiCreatedResponse({
    status: 200,
    description: 'return all dog by loof',
    type: [Animal],
  })
  findAllIsLoof(@Param('loof') loof: boolean) {
    return this.animalsService.findAllIsLoof(loof);
  }

  @Get(':age')
  @ApiCreatedResponse({
    status: 200,
    description: 'return all dog by age',
    type: [Animal],
  })
  findAllByAge(@Param('age') age: number) {
    return this.animalsService.findAllByAge(age);
  }
}
