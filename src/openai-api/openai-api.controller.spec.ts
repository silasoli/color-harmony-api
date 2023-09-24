import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiApiController } from './openai-api.controller';
import { OpenaiApiService } from './openai-api.service';

describe('OpenaiApiController', () => {
  let controller: OpenaiApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiApiController],
      providers: [OpenaiApiService],
    }).compile();

    controller = module.get<OpenaiApiController>(OpenaiApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
