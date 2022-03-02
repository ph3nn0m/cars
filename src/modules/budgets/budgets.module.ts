import { Module } from '@nestjs/common';

import { BudgetsService } from './budgets.service';
import { BudgetsController } from './budgets.controller';
import { budgetsProviders } from './budgets.providers';
import { ServicesService } from '../service/services.service';

@Module({
  providers: [BudgetsService, ServicesService, ...budgetsProviders],
  controllers: [BudgetsController],
})
export class BudgetsModule {}
