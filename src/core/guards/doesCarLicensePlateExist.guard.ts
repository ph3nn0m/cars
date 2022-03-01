import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

import { CarsService } from '../../modules/cars/cars.service';

@Injectable()
export class DoesCarLicensePlateExist implements CanActivate {
    constructor(private readonly carsService: CarsService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const carExist = await this.carsService.findOneByLicensePlate(request.body.license_plate);
        if (carExist) {
            throw new ForbiddenException('This car already exist');
        }
        return true;
    }
}
