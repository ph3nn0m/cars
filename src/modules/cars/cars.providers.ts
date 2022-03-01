import { Car } from './car.entity';
import { Owner } from '../owners/owner.entity';
import { CAR_REPOSITORY, OWNER_REPOSITORY } from '../../core/constants';


export const carsProviders = [
    {
        provide: CAR_REPOSITORY,
        useValue: Car,
    },
    {
        provide: OWNER_REPOSITORY,
        useValue: Owner,
    },
];
