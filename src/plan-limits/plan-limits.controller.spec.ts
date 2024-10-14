import { Test, TestingModule } from '@nestjs/testing';
import { PlanLimitsController } from './plan-limits.controller';

describe('PlanLimitsController', () => {
  let controller: PlanLimitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanLimitsController],
    }).compile();

    controller = module.get<PlanLimitsController>(PlanLimitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
