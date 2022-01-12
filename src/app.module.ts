import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OwnerModule } from './owner/owner.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    OwnerModule,
    UsersModule,
    AnimalsModule,
    MongooseModule.forRoot(
      'mongodb://root:changeit@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
    ),
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
