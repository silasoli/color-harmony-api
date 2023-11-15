import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  ValidateIf,
} from 'class-validator';

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
  @ValidateIf((object) => object.font_size != null)
  @IsNumber()
  @IsIn([1.5, 2, 2.5], { message: 'The value must be 1.5, 2, 2.5' })
  font_size?: number | null;
}
