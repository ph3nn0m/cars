import { Module } from '@nestjs/common';

import { ServicesService } from './services.service';
import { servicesProviders } from './services.providers';

@Module({
  providers: [ServicesService, ...servicesProviders],
  exports: [ServicesService],
})
export class ServicesModule {}
