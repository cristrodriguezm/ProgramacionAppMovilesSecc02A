import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve data using GET method', () => {
    const testData = { id: 1, name: 'John Doe' };
    const endpoint = 'users';

    service.get(endpoint).subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${endpoint}`);
    expect(req.request.method).toBe('GET');
    req.flush(testData);
  });

  it('should send data using POST method', () => {
    const testData = { username: 'john', password: '123456' };
    const endpoint = 'register';

    service.post(endpoint, testData).subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${endpoint}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(testData);
    req.flush(testData);
  });

  it('should update data using PUT method', () => {
    const testData = { id: 1, name: 'John Doe' };
    const endpoint = 'users/1';

    service.put(endpoint, testData).subscribe((response) => {
      expect(response).toEqual(testData);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${endpoint}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(testData);
    req.flush(testData);
  });

  it('should delete data using DELETE method', () => {
    const endpoint = 'users/1';

    service.delete(endpoint).subscribe((response) => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/${endpoint}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
