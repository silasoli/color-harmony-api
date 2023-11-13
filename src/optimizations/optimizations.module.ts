import { Module } from '@nestjs/common';
import { OptimizationsService } from './services/optimizations.service';
import { OptimizationsController } from './controllers/optimizations.controller';
import { OpenaiApiModule } from '../openai-api/openai-api.module';
import { MockOptimizationsService } from './services/mock-optimizations.service';

@Module({
  imports: [OpenaiApiModule],
  controllers: [OptimizationsController],
  providers: [OptimizationsService, MockOptimizationsService],
})
export class OptimizationsModule {}
