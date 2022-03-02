import { Budget } from './budget.entity';
import { BUDGET_REPOSITORY, SERVICE_REPOSITORY } from '../../core/constants';
import { Service } from '../service/service.entity';

export const budgetsProviders = [
    {
        provide: BUDGET_REPOSITORY,
        useValue: Budget,
    },
    {
        provide: SERVICE_REPOSITORY,
        useValue: Service,
    },
];
