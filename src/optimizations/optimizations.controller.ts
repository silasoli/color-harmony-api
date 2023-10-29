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
import { UserRequestDTO } from '../common/dtos/user-request.dto';
import { UserRequest } from '../auth/decorators/user-request.decorator';

@ApiBearerAuth()
@ApiTags('User Optimizations')
@Controller('api-user/optimizations')
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
}
