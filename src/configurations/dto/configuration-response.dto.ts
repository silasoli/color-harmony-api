import { ApiProperty } from '@nestjs/swagger';
import { Configuration } from '../schemas/configuration.entity';

export class ConfigurationResponseDto {
  constructor(config: Configuration) {
    const { _id, user_id, night_mode, daltonian, font_size } = config;

    return {
      _id: String(_id),
      user_id: String(user_id),
      daltonian,
      night_mode,
      font_size,
    };
  }

  @ApiProperty({ required: false })
  _id: string;

  @ApiProperty({ required: false })
  user_id: string;

  @ApiProperty({ required: false })
  night_mode: boolean;

  @ApiProperty({ required: false })
  daltonian: boolean;

  @ApiProperty({ required: false })
  font_size: string;
}
