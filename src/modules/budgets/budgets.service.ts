import { Injectable, Inject } from '@nestjs/common';
import { Budget } from './budget.entity';
import { BUDGET_REPOSITORY, SERVICE_REPOSITORY, SETTING_REPOSITORY } from '../../core/constants';
import { Car } from '../cars/car.entity';
import { Owner } from '../owners/owner.entity';
import { Service } from '../service/service.entity';
import { Setting } from '../settings/setting.entity';
import { Op } from 'sequelize';
import { CreateServiceDto } from '../service/dto/createService.dto';
import { DeleteBudgetDto } from './dto/deleteBudget.dto';
import { CreateBudgetDto } from './dto/createBudget.dto';
import { FindBudgetDto } from './dto/findBudget.dto';


@Injectable()
export class BudgetsService {

    constructor(@Inject(BUDGET_REPOSITORY) private readonly budgetRepository: typeof Budget, @Inject(SETTING_REPOSITORY) private readonly settingRepository: typeof Setting, @Inject(SERVICE_REPOSITORY) private readonly serviceRepository: typeof Service) { }

    async create(entity: CreateBudgetDto): Promise<Budget> {
        const { owner_id, car_id, services } = entity;


        const cost_table = await this.settingRepository.findAll<Setting>({ where: {
            key: {
                [Op.like]: 'service_price_%'
            }
        }});

        const serviceToAdd = services.map( ({job}) => ({
            job,
            cost: cost_table.find(x => x.key === `service_price_${job}`).value
        }));       

        const total = serviceToAdd.reduce((acc: number, service: any) => { 
            return acc + (+service.cost); 
        }, 0).toString()

        const budgetObject = new CreateBudgetDto({
            owner_id,
            car_id,
            total
        });

        const budget = await this.budgetRepository.create<Budget>(budgetObject);

        serviceToAdd.forEach( async ({ job, cost }) => {
            const serviceObject = new CreateServiceDto({
                job,
                cost,
                budget_id: budget.id,
                car_id
            });
            await this.serviceRepository.create<Service>(serviceObject);
        });

        return budget;
    }

    async findAll(): Promise<Budget[]> {
        return await this.budgetRepository.findAll<Budget>({
            include: [{ model: Car }, { model: Owner }, { model: Service }],
        });
    }

    async findOne(entity: FindBudgetDto): Promise<Budget> {
        const { id } = entity;
        return await this.budgetRepository.findOne({
            where: { id },
            include: [{ model: Car }, { model: Owner }, { model: Service }],
        });
    }

    async delete(entity: DeleteBudgetDto) {
        const { id } = entity;
        return await this.budgetRepository.destroy({ where: { id } });
    }
    
}
