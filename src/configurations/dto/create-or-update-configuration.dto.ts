import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

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
  @IsNumber()
  font_size?: number | null;
}
