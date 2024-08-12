import { TestBed } from '@angular/core/testing';

import { FactionsService } from './factions.service';
import { FactionGateway } from '@core/ports';
import { FactionMockAdapter } from '@core/adapters/mock/factionMock.adapter';

describe('FactionsService', () => {
  let service: FactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FactionsService,
        {
          provide: FactionGateway,
          useValue: FactionMockAdapter,
        },
      ],
    });
    service = TestBed.inject(FactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
