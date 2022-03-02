import { Injectable, Inject } from '@nestjs/common';
import { Budget } from './budget.entity';
import { BUDGET_REPOSITORY } from '../../core/constants';
import { Car } from '../cars/car.entity';
import { CreateBudgetDto } from './dto/createBudget.dto';
import { FindBudgetDto } from './dto/findBudget.dto';
import { DeleteBudgetDto } from './dto/deleteBudget.dto';


@Injectable()
export class BudgetsService {
    constructor(@Inject(BUDGET_REPOSITORY) private readonly budgetRepository: typeof Budget) { }

    async create(post: CreateBudgetDto): Promise<Budget> {
        return await this.budgetRepository.create<Budget>({ ...post });
    }

    async findAll(): Promise<Budget[]> {
        return await this.budgetRepository.findAll<Budget>({
            include: [{ model: Car }],
        });
    }

    async findOne(entity: FindBudgetDto): Promise<Budget> {
        const { id } = entity;
        return await this.budgetRepository.findOne({
            where: { id },
            include: [{ model: Car }],
        });
    }

    async delete(entity: DeleteBudgetDto) {
        const { id } = entity;
        return await this.budgetRepository.destroy({ where: { id } });
    }
    
}
