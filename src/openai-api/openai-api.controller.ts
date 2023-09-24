import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import { Role } from '../roles/decorators/roles.decorator';
import Roles from '../roles/enums/role.enum';
import { AuthUserJwtGuard } from '../auth/guards/auth-user-jwt.guard';
import { RoleGuard } from '../roles/guards/role.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Openai-api')
@Controller('openai-api')
@UseGuards(AuthUserJwtGuard, RoleGuard)
export class OpenaiApiController {
  constructor(private readonly openaiApiService: OpenaiApiService) {}

  @Post()
  @Role([Roles.ADMIN])
  create(@Body() dto: CreateOpenaiApiDto) {
    return this.openaiApiService.create(dto);
  }
}
