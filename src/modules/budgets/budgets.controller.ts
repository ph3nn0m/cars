import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { BudgetsService } from './budgets.service';
import { Budget } from './budget.entity';
import { CreateBudgetDto } from './dto/createBudget.dto';
import { FindBudgetDto } from './dto/findBudget.dto';
import { DeleteBudgetDto } from './dto/deleteBudget.dto';
import { ServicesService } from '../service/services.service';

@Controller('budgets')
export class BudgetsController {
    constructor(private readonly budgetService: BudgetsService, private readonly servicesService: ServicesService) { }

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

    @UseGuards(AuthGuard('jwt'))
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() entity: CreateBudgetDto): Promise<Budget> {
        return await this.budgetService.create(entity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param() entity: DeleteBudgetDto) {
        const deleted = await this.budgetService.delete(entity);
        if (deleted === 0) {
            throw new NotFoundException('This Budget doesn\'t exist');
        }
        return { deleted };
    }
}
