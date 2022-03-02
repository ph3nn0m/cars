import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FindCarDto } from 'src/modules/cars/dto/findCar.dto';

import { CarsService } from '../../modules/cars/cars.service';

@Injectable()
export class DoesCarExist implements CanActivate {
    constructor(private readonly carsService: CarsService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const carExist = await this.carsService.findOne(new FindCarDto({ id: request.body.car_id}));
        if (!carExist) {
            throw new ForbiddenException('This car does not exist');
        }
        return true;
    }
}
