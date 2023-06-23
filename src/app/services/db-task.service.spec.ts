import { TestBed } from '@angular/core/testing';

import { DBTaskService } from './db-task.service';

describe('DbTaskService', () => {
  let service: DBTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DBTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
