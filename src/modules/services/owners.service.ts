import { Injectable, Inject } from '@nestjs/common';
import { Owner } from './owner.entity';
import { Car } from '../cars/car.entity';
import { CreateOwnerDto } from './dto/createOwner.dto';
import { OWNER_REPOSITORY } from '../../core/constants';
import { FindOwnerDto } from './dto/findOwner.dto';
import { DeleteOwnerDto } from './dto/deleteOwner.dto';
import { UpdateOwnerDto } from './dto/updateOwner.dto';


@Injectable()
export class OwnersService {
    constructor(@Inject(OWNER_REPOSITORY) private readonly ownerRepository: typeof Owner) { }

    async create(post: CreateOwnerDto): Promise<Owner> {
        return await this.ownerRepository.create<Owner>({ ...post });
    }

    async findAll(): Promise<Owner[]> {
        return await this.ownerRepository.findAll<Owner>({
            include: [{ model: Car }],
        });
    }

    async findOne(entity: FindOwnerDto): Promise<Owner> {
        const { id } = entity;
        return await this.ownerRepository.findOne({
            where: { id },
            include: [{ model: Car }],
        });
    }

    async delete(entity: DeleteOwnerDto) {
        const { id } = entity;
        return await this.ownerRepository.destroy({ where: { id } });
    }

    async update(entity: UpdateOwnerDto) {
        const { id, ...data } = entity;
        const [numberOfAffectedRows] = await this.ownerRepository.update(data, { where: { id } });
        return { numberOfAffectedRows };
    }
}
