import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { OwnersService } from './owners.service';
import { Owner as OwnerEntity } from './owner.entity';
import { CreateOwnerDto } from './dto/createOwner.dto';
import { FindOwnerDto } from './dto/findOwner.dto';
import { UpdateOwnerDto } from './dto/updateOwner.dto';
import { DeleteOwnerDto } from './dto/deleteOwner.dto';
import { BodyAndParam } from 'src/core/decorators/BodyAndParams';

@Controller('owners')
export class OwnersController {
    constructor(private readonly ownerService: OwnersService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() : Promise<OwnerEntity[]> {
        return await this.ownerService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param() entity: FindOwnerDto): Promise<OwnerEntity> {
        const model = await this.ownerService.findOne(entity);
        if (!model) {
            throw new NotFoundException('This Owner doesn\'t exist');
        }
        return model;
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() entity: CreateOwnerDto): Promise<OwnerEntity> {
        return await this.ownerService.create(entity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    async update(@BodyAndParam() entity: UpdateOwnerDto): Promise<OwnerEntity> {
        const { numberOfAffectedRows } = await this.ownerService.update(entity);
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This Owner doesn\'t exist');
        }
        return await this.ownerService.findOne(entity);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param() entity: DeleteOwnerDto) {
        const deleted = await this.ownerService.delete(entity);
        if (deleted === 0) {
            throw new NotFoundException('This Owner doesn\'t exist');
        }
        return { deleted };
    }
}
