import { Injectable, Inject } from '@nestjs/common';

import { Service } from './service.entity';
import { CreateServiceDto } from './dto/createService.dto';
import { FindServiceDto } from './dto/findService.dto';
import { SERVICE_REPOSITORY } from '../../core/constants';

@Injectable()
export class ServicesService {
    constructor(@Inject(SERVICE_REPOSITORY) private readonly serviceRepository: typeof Service) { }

    async create(service: CreateServiceDto): Promise<Service> {
        return await this.serviceRepository.create<Service>(service);
    }

    async findOneByBudget(entity: FindServiceDto): Promise<Service> {
        const { budget_id } = entity;
        return await this.serviceRepository.findOne<Service>({ where: { budget_id } });
    }

}
