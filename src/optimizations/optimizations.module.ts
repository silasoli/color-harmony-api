import { Module } from '@nestjs/common';
import { OptimizationsService } from './optimizations.service';
import { OptimizationsController } from './optimizations.controller';
import { OpenaiApiModule } from '../openai-api/openai-api.module';

@Module({
  imports: [OpenaiApiModule],
  controllers: [OptimizationsController],
  providers: [OptimizationsService],
})
export class OptimizationsModule {}
