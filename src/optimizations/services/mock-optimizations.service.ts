import { Injectable } from '@nestjs/common';
import { ConfigurationsService } from '../../configurations/services/configurations.service';

@Injectable()
export class MockOptimizationsService {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  public async getMockOptimizationByURL(
    user_id: string,
    url: string,
  ): Promise<string> {
    const userConfig = await this.configurationsService.findOne(user_id);

    console.log(userConfig, user_id, url);
    return 'oi';
  }
}
