import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { CarsService } from './cars.service';
import { Car as CarEntity } from './car.entity';
import { CreateCarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { DeleteCarDto } from './dto/deleteCar.dto';
import { FindCarDto } from './dto/findCar.dto';
import { BodyAndParam } from 'src/core/decorators/BodyAndParams';

@Controller('cars')
export class CarsController {
    constructor(private readonly carService: CarsService) { }

    @Get()
    async findAll() : Promise<CarEntity[]> {
        return await this.carService.findAll();
    }

    @Get(':id')
    async findOne(@Body() entity: FindCarDto): Promise<CarEntity> {
        const model = await this.carService.findOne(entity);
        if (!model) {
            throw new NotFoundException('This Car doesn\'t exist');
        }
        return model;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    async create(@Body() entity: CreateCarDto): Promise<CarEntity> {
        return await this.carService.create(entity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    async update(@BodyAndParam() entity: UpdateCarDto): Promise<CarEntity> {
        const { numberOfAffectedRows } = await this.carService.update(entity);
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Car doesn\'t exist');
        }
        return await this.carService.findOne(entity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    async remove(@Param() entity: DeleteCarDto) {
        const deleted = await this.carService.delete(entity);
        if (deleted === 0) {
            throw new NotFoundException('This Car doesn\'t exist');
        }
        return { deleted };
    }
}
