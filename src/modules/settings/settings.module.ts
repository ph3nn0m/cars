import { Module } from '@nestjs/common';

import { SettingsService } from './settings.service';
import { settingsProviders } from './settings.providers';

@Module({
  providers: [SettingsService, ...settingsProviders],
  exports: [SettingsService],
})
export class SettingsModule {}
