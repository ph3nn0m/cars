import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FindCarDto } from 'src/modules/cars/dto/findCar.dto';
import { FindSettingDto } from 'src/modules/settings/dto/findSetting.dto';
import { SettingsService } from 'src/modules/settings/settings.service';

import { CarsService } from '../../modules/cars/cars.service';

@Injectable()
export class PolicyBudgetDisallow implements CanActivate {
    constructor(private readonly carsService: CarsService, private readonly settingsService: SettingsService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {

        const { value: policy } = await this.settingsService.findOneByKey(new FindSettingDto({ key: 'policy_budget_disallow'}));

        const policyObject = JSON.parse(policy);  
        if(policyObject?.car){
            const car = await this.carsService.findOne(new FindCarDto({ id: request.body.car_id}));
            const carPolicy = policyObject.car;
            if(carPolicy?.color){
                const colorPolicy = carPolicy.color;

                if(request.body.services.some( ({job}) => {
                    return colorPolicy.find( e => e.value === car.color && e.job === job )
                })){
                    throw new ForbiddenException('budget policy violation: "Grey car" cannot do "paint job"');
                }
            }
        }
        
        return true;
    }
}
