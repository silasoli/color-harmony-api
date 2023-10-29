import { Injectable } from '@nestjs/common';
import { CreateOrUpdateConfigurationDto } from '../dto/create-or-update-configuration.dto';
import {
  Configuration,
  ConfigurationDocument,
} from '../schemas/configuration.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ConfigurationResponseDto } from '../dto/configuration-response.dto';

@Injectable()
export class ConfigurationsService {
  constructor(
    @InjectModel(Configuration.name)
    private configurationModel: Model<ConfigurationDocument>,
  ) { }

  public async findOne(user_id: string): Promise<ConfigurationResponseDto> {
    const configuration = await this.configurationModel.findOne({ user_id });

    if (!configuration) return null;
    return new ConfigurationResponseDto(configuration);
  }

  public async createOrUpdateConfiguration(
    user_id: string,
    dto: CreateOrUpdateConfigurationDto,
  ): Promise<ConfigurationResponseDto> {
    const existConfig = await this.findOne(user_id);

    if (!existConfig) return this.createConfiguration(user_id, dto);

    return this.updateConfiguration(String(existConfig._id), user_id, dto);
  }

  private async createConfiguration(
    user_id: string,
    dto: CreateOrUpdateConfigurationDto,
  ): Promise<ConfigurationResponseDto> {
    const rawData = { user_id, ...dto };

    const configuration = await this.configurationModel.create(rawData);

    return new ConfigurationResponseDto(configuration);
  }

  private async updateConfiguration(
    _id: string,
    user_id: string,
    dto: CreateOrUpdateConfigurationDto,
  ): Promise<ConfigurationResponseDto> {
    const rawData = { user_id, ...dto };

    await this.configurationModel.updateOne({ _id }, rawData);

    return this.findOne(user_id);
  }
}
