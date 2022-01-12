import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner, OwnerSchema } from './schemas/owner.schema';
import { Animal, AnimalSchema } from 'src/animals/schemas/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: OwnerSchema }]),
  ],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
