import { PartialType } from '@nestjs/swagger';
import { CreateOptimizationDto } from './create-optimization.dto';

export class UpdateOptimizationDto extends PartialType(CreateOptimizationDto) {}
