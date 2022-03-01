import { Module } from '@nestjs/common';

import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { carsProviders } from './cars.providers';
import { OwnersService } from '../owners/owners.service';


@Module({
  providers: [CarsService, OwnersService,...carsProviders],
  controllers: [CarsController],
})
export class CarsModule {}
