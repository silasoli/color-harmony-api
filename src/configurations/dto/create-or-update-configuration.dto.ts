import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateOrUpdateConfigurationDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  night_mode?: boolean | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  daltonian?: boolean | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  font_size?: string | null;
}
