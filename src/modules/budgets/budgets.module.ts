import { Module } from '@nestjs/common';

import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { budgetsProviders } from './budgets.providers';
import { ServicesService } from '../service/services.service';
import { SettingsService } from '../settings/settings.service';
import { CarsService } from '../cars/cars.service';
import { OwnersService } from '../owners/owners.service';

@Module({
  providers: [BudgetsService, ServicesService, SettingsService, CarsService, OwnersService, ...budgetsProviders],
  controllers: [BudgetsController],
})
export class BudgetsModule {}
