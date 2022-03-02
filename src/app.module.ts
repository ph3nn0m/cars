import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { OwnersModule } from './modules/owners/owners.module';
import { CarsModule } from './modules/cars/cars.module';
import { ServicesModule } from './modules/service/services.module';
import { BudgetsModule } from './modules/budgets/budgets.module';
import { SettingsModule } from './modules/settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    OwnersModule,
    CarsModule,
    ServicesModule,
    BudgetsModule,
    SettingsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
