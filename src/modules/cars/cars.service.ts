import { Injectable, Inject } from '@nestjs/common';

import { Car } from './car.entity';
import { Owner } from '../owners/owner.entity';
import { CAR_REPOSITORY } from '../../core/constants';
import { CreateCarDto } from './dto/createCar.dto';
import { UpdateCarDto } from './dto/updateCar.dto';
import { DeleteCarDto } from './dto/deleteCar.dto';
import { FindCarDto } from './dto/findCar.dto';

@Injectable()
export class CarsService {
    constructor(@Inject(CAR_REPOSITORY) private readonly carRepository: typeof Car) { }

    async create(entity: CreateCarDto): Promise<Car> {
        return await this.carRepository.create<Car>(entity);
    }

    async findAll(): Promise<Car[]> {
        return await this.carRepository.findAll<Car>({
            include: [{ model: Owner }],
        });
    }

    async findOne(entity: FindCarDto): Promise<Car> {
        const { id } = entity;
        return await this.carRepository.findOne({
            where: { id },
            include: [{ model: Owner }],
        });
    }

    async delete(entity: DeleteCarDto) {
        const { id } = entity
        return await this.carRepository.destroy({ where: { id } });
    }

    async update(entity: UpdateCarDto) {
        const { id, ...data } = entity;
        const [numberOfAffectedRows] = await this.carRepository.update(data, { where: { id } });
        return { numberOfAffectedRows };
    }
}
