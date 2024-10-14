import { Test, TestingModule } from '@nestjs/testing';
import { PlanLimitsService } from './plan-limits.service';

describe('PlanLimitsService', () => {
  let service: PlanLimitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanLimitsService],
    }).compile();

    service = module.get<PlanLimitsService>(PlanLimitsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
