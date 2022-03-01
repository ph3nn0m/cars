import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { FindOwnerDto } from 'src/modules/owners/dto/findOwner.dto';

import { OwnersService } from 'src/modules/owners/owners.service';


@Injectable()
export class DoesCarOwnerExist implements CanActivate {
    constructor(private readonly ownersService: OwnersService) { }

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request);
    }

    async validateRequest(request) {
        const entity = new FindOwnerDto({ id: request.body.owner_id });
        const ownerExist = await this.ownersService.findOne(entity);
        if (!ownerExist) {
            throw new ForbiddenException('The owner does not exist');
        }
        return true;
    }
}
