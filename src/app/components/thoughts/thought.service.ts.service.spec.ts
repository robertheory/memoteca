import { TestBed } from '@angular/core/testing';

import { Thought.Service.TsService } from './thought.service.ts.service';

describe('Thought.Service.TsService', () => {
  let service: Thought.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Thought.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
