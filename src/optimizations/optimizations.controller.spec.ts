import { Test, TestingModule } from '@nestjs/testing';
import { OptimizationsController } from './optimizations.controller';
import { OptimizationsService } from './optimizations.service';

describe('OptimizationsController', () => {
  let controller: OptimizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OptimizationsController],
      providers: [OptimizationsService],
    }).compile();

    controller = module.get<OptimizationsController>(OptimizationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
