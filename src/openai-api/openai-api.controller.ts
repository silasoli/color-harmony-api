import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import { UpdateOpenaiApiDto } from './dto/update-openai-api.dto';

@Controller('openai-api')
export class OpenaiApiController {
  constructor(private readonly openaiApiService: OpenaiApiService) {}

  @Post()
  create(@Body() createOpenaiApiDto: CreateOpenaiApiDto) {
    return this.openaiApiService.create(createOpenaiApiDto);
  }
}
