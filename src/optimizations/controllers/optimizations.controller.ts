import { Controller, Post, Body, UseGuards, Get, Query } from '@nestjs/common';
import { OptimizationsService } from '../services/optimizations.service';
import { CreateOptimizationScrapingDto } from '../dto/create-optimization-scraping.dto';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateOptimizationStyleDto } from '../dto/create-optimization-style.dto';
import Roles from '../../roles/enums/role.enum';
import { Role } from '../../roles/decorators/roles.decorator';
import { UserRequestDTO } from '../../common/dtos/user-request.dto';
import { UserRequest } from '../../auth/decorators/user-request.decorator';
import { MockOptimizationsService } from '../services/mock-optimizations.service';
import { RoleGuard } from '../../roles/guards/role.guard';

@ApiBearerAuth()
@ApiTags('User Optimizations')
@Controller('api-user/optimizations')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class OptimizationsController {
  constructor(
    private readonly optimizationsService: OptimizationsService,
    private readonly mockOptimizationsService: MockOptimizationsService,
  ) {}

  @ApiOperation({ summary: 'Obter otimização de interface pelo web scraping.' })
  @ApiResponse({
    status: 201,
    description:
      'Otimização de interface pelo web scraping do openai api retornado com sucesso.',
  })
  @Post('scraping')
  @Role([Roles.ADMIN, Roles.USER])
  createOptimizationByScraping(
    @UserRequest() user: UserRequestDTO,
    @Body() dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByScraping(
      user._id,
      dto,
    );
  }

  @ApiOperation({ summary: 'Obter otimização de interface pelo css.' })
  @ApiResponse({
    status: 201,
    description: 'Otimização de interface pelo css retornado com sucesso.',
  })
  @Post('style')
  @Role([Roles.ADMIN, Roles.USER])
  createOptimizationByStyle(
    @UserRequest() user: UserRequestDTO,
    @Body() dto: CreateOptimizationStyleDto,
  ): Promise<string> {
    return this.optimizationsService.createOptimizationByStyle(user._id, dto);
  }

  @ApiOperation({
    summary: 'Obter mock de otimização de interface pela URL do site.',
  })
  @ApiResponse({
    status: 201,
    description:
      'Mock de Otimização de interface pela URL retornado com sucesso.',
  })
  @Post('mocks')
  @Role([Roles.ADMIN, Roles.USER])
  getOptimizationMockByStyle(
    @UserRequest() user: UserRequestDTO,
    @Body() dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    return this.mockOptimizationsService.getMockOptimizationByURL(
      user._id,
      dto.url,
    );
  }
}
