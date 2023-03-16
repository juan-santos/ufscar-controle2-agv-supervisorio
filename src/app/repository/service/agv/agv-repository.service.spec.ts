import { TestBed } from '@angular/core/testing';

import { AgvRepositoryService } from './agv-repository.service';

describe('AgvRepositoryService', () => {
  let service: AgvRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgvRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
