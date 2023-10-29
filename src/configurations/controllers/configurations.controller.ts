import { Controller, Get, Body, UseGuards, Put } from '@nestjs/common';
import { ConfigurationsService } from '../services/configurations.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthUserJwtGuard } from '../../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../../roles/guards/role.guard';
import { UserRequestDTO } from '../../common/dtos/user-request.dto';
import { UserRequest } from '../../auth/decorators/user-request.decorator';
import { Role } from '../../roles/decorators/roles.decorator';
import Roles from '../../roles/enums/role.enum';
import { CreateOrUpdateConfigurationDto } from '../dto/create-or-update-configuration.dto';
import { ConfigurationResponseDto } from '../dto/configuration-response.dto';

@ApiBearerAuth()
@ApiTags('User Profile')
@Controller('api-user/profile/configurations')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class ConfigurationsController {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  @ApiOperation({ summary: 'Obter Configurações do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Configurações do usuário retornada com sucesso',
    type: ConfigurationResponseDto,
  })
  @Get()
  @Role([Roles.ADMIN, Roles.USER])
  findOne(@UserRequest() user: UserRequestDTO) {
    return this.configurationsService.findOne(user._id);
  }

  @ApiOperation({ summary: 'Criar ou atualizar configurações do usuário' })
  @ApiResponse({
    status: 200,
    description: 'Configurações do usuário criada ou atualizada com sucesso',
    type: ConfigurationResponseDto,
  })
  @ApiBody({ type: CreateOrUpdateConfigurationDto })
  @Put()
  @Role([Roles.ADMIN, Roles.USER])
  update(
    @UserRequest() user: UserRequestDTO,
    @Body() dto: CreateOrUpdateConfigurationDto,
  ) {
    return this.configurationsService.createOrUpdateConfiguration(
      user._id,
      dto,
    );
  }
}
