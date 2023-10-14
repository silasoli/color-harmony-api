import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OptimizationsService } from './optimizations.service';
import { CreateOptimizationScrapingDto } from './dto/create-optimization-scraping.dto';
import { AuthUserJwtGuard } from '../auth/guards/auth-user-jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateOptimizationStyleDto } from './dto/create-optimization-style.dto';
import Roles from '../roles/enums/role.enum';
import { Role } from '../roles/decorators/roles.decorator';

@ApiBearerAuth()
@ApiTags('Optimizations')
@Controller('optimizations')
@UseGuards(AuthUserJwtGuard)
export class OptimizationsController {
  constructor(private readonly optimizationsService: OptimizationsService) {}

  @ApiOperation({ summary: 'Obter otimização de interface pelo web scraping.' })
  @ApiResponse({
    status: 201,
    description:
      'Otimização de interface pelo web scraping do openai api retornado com sucesso.',
  })
  @Post('scraping')
  @Role([Roles.ADMIN])
  createOptimizationByScraping(
    @Body() dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByScraping(dto);
  }

  @ApiOperation({ summary: 'Obter otimização de interface pelo css.' })
  @ApiResponse({
    status: 201,
    description: 'Otimização de interface pelo css retornado com sucesso.',
    // type: string,
  })
  @Post('style')
  @Role([Roles.ADMIN])
  createOptimizationByStyle(
    @Body() dto: CreateOptimizationStyleDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByStyle(dto);
  }
}
