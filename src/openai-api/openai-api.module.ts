import { Module } from '@nestjs/common';
import { OpenaiApiService } from './openai-api.service';
import { OpenaiApiController } from './openai-api.controller';

@Module({
  controllers: [OpenaiApiController],
  providers: [OpenaiApiService],
  exports: [OpenaiApiService]
})
export class OpenaiApiModule {}
