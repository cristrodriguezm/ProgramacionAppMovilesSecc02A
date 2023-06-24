import { TestBed } from '@angular/core/testing';

import { CrudservicesService } from './crudservices.service';

describe('CrudservicesService', () => {
  let service: CrudservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
