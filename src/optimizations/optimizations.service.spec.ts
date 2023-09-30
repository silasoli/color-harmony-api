import { Test, TestingModule } from '@nestjs/testing';
import { OptimizationsService } from './optimizations.service';

describe('OptimizationsService', () => {
  let service: OptimizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OptimizationsService],
    }).compile();

    service = module.get<OptimizationsService>(OptimizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
