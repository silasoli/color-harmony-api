import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OptimizationsService } from './optimizations.service';
import { CreateOptimizationScrapingDto } from './dto/create-optimization-scraping.dto';
import { AuthUserJwtGuard } from '../auth/guards/auth-user-jwt.guard';
import { ApiTags } from '@nestjs/swagger';
import { CreateOptimizationStyleDto } from './dto/create-optimization-style.dto';

@ApiTags('Optimizations')
@Controller('optimizations')
@UseGuards(AuthUserJwtGuard)
export class OptimizationsController {
  constructor(private readonly optimizationsService: OptimizationsService) {}

  @Post('scraping')
  createOptimizationByScraping(
    @Body() dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByScraping(dto);
  }

  @Post('style')
  createOptimizationByStyle(
    @Body() dto: CreateOptimizationStyleDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByStyle(dto);
  }
}
