import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOpenaiApiDto {
  @ApiProperty({ required: true })
  @IsNotEmpty({ message: 'Envie uma pergunta' })
  question: string;
}
