import { Injectable, Inject } from '@nestjs/common';

import { Setting } from './setting.entity';
import { SettingDto } from './dto/setting.dto';
import { FindSettingDto } from './dto/findSetting.dto';
import { SETTING_REPOSITORY } from '../../core/constants';
import { Op } from 'sequelize';

@Injectable()
export class SettingsService {
    constructor(@Inject(SETTING_REPOSITORY) private readonly settingRepository: typeof Setting) { }

    async create(setting: SettingDto): Promise<Setting> {
        return await this.settingRepository.create<Setting>(setting);
    }

    async findAll(): Promise<Setting[]> {
        return await this.settingRepository.findAll<Setting>();
    }

    async findAllServicePrices(): Promise<Setting[]> {
        return await this.settingRepository.findAll<Setting>({ where: {
            key: {
                [Op.like]: 'service_price_%'
            }
        }});
    }

    async findOneByKey(entity: FindSettingDto): Promise<Setting> {
        const { key } = entity;
        return await this.settingRepository.findOne<Setting>({ where: { key } });
    }

    async delete(entity: FindSettingDto) {
        const { key } = entity;
        return await this.settingRepository.destroy({ where: { key } });
    }

    async update(entity: SettingDto) {
        const { key, ...data } = entity;
        const [numberOfAffectedRows] = await this.settingRepository.update(data, { where: { key } });
        return { numberOfAffectedRows };
    }

}
