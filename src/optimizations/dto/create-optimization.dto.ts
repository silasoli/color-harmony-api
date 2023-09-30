import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOptimizationDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Envie a URL do site' })
  url: string;
}
