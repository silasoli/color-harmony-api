import { PartialType } from '@nestjs/swagger';
import { CreateOpenaiApiDto } from './create-openai-api.dto';

export class UpdateOpenaiApiDto extends PartialType(CreateOpenaiApiDto) {}
