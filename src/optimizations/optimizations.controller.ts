import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OptimizationsService } from './optimizations.service';
import { CreateOptimizationDto } from './dto/create-optimization.dto';
import { AuthUserJwtGuard } from '../auth/guards/auth-user-jwt.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Optimizations')
@Controller('optimizations')
@UseGuards(AuthUserJwtGuard)
export class OptimizationsController {
  constructor(private readonly optimizationsService: OptimizationsService) {}

  @Post()
  create(@Body() dto: CreateOptimizationDto): Promise<any> {
    return this.optimizationsService.createOptimization(dto);
  }
}
