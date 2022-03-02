import { Budget } from './budget.entity';
import { BUDGET_REPOSITORY, CAR_REPOSITORY, OWNER_REPOSITORY, SERVICE_REPOSITORY, SETTING_REPOSITORY } from '../../core/constants';
import { Service } from '../service/service.entity';
import { Setting } from '../settings/setting.entity';
import { Car } from '../cars/car.entity';
import { Owner } from '../owners/owner.entity';

export const budgetsProviders = [
    {
        provide: BUDGET_REPOSITORY,
        useValue: Budget,
    },
    {
        provide: SERVICE_REPOSITORY,
        useValue: Service,
    },
    {
        provide: SETTING_REPOSITORY,
        useValue: Setting,
    },
    {
        provide: CAR_REPOSITORY,
        useValue: Car,
    },
    {
        provide: OWNER_REPOSITORY,
        useValue: Owner,
    },
];
