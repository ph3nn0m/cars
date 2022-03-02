import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BudgetsService } from './budgets.service';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dto/createBudget.dto';
import { FindBudgetDto } from './dto/findBudget.dto';
import { DeleteBudgetDto } from './dto/deleteBudget.dto';
import { ServicesService } from '../service/services.service';
import { SettingsService } from '../settings/settings.service';
import { Service } from '../service/service.entity';
import { CreateServiceDto } from '../service/dto/createService.dto';
import { DoesCarOwnerExist } from 'src/core/guards/doesCarOwnerExist.guard';
import { DoesCarExist } from 'src/core/guards/doesCarExist.guard';

@Controller('budgets')
export class BudgetsController {
    constructor(private readonly budgetService: BudgetsService, private readonly servicesService: ServicesService, private readonly settingsService: SettingsService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() : Promise<Budget[]> {
        return await this.budgetService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param() entity: FindBudgetDto): Promise<Budget> {
        const model = await this.budgetService.findOne(entity);
        if (!model) {
            throw new NotFoundException('This Budget doesn\'t exist');
        }
        return model;
    }

    @UseGuards(AuthGuard('jwt'), DoesCarExist ,DoesCarOwnerExist)
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() entity: CreateBudgetDto): Promise<Budget> {
        return await this.budgetService.create(entity);
    }
}
