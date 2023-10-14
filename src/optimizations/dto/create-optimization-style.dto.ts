import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOptimizationStyleDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Envie o conteúdo do css do site' })
  css: string;
}
