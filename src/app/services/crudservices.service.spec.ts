import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudService } from './crudservices.service';

describe('CrudService', () => {
  let service: CrudService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CrudService],
    });
    service = TestBed.inject(CrudService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve objects from the API via GET', () => {
    const objectsMock = [{ id: 1, name: 'Object 1' }, { id: 2, name: 'Object 2' }];

    service.getObjects().subscribe((objects) => {
      expect(objects).toEqual(objectsMock);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/objects`); // Acceder a la propiedad 'apiUrl' como privada
    expect(req.request.method).toBe('GET');
    req.flush(objectsMock);
  });

  it('should retrieve an object from the API via GET', () => {
    const objectMock = { id: 1, name: 'Object 1' };
    const objectId = 1;

    service.getObject(objectId).subscribe((object) => {
      expect(object).toEqual(objectMock);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/objects/${objectId}`); // Acceder a la propiedad 'apiUrl' como privada
    expect(req.request.method).toBe('GET');
    req.flush(objectMock);
  });

  it('should create an object via POST', () => {
    const objectMock = { name: 'New Object' };

    service.createObject(objectMock).subscribe((response) => {
      expect(response).toEqual(objectMock);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/objects`); // Acceder a la propiedad 'apiUrl' como privada
    expect(req.request.method).toBe('POST');
    req.flush(objectMock);
  });

  it('should update an object via PUT', () => {
    const objectId = 1;
    const objectMock = { id: 1, name: 'Updated Object' };

    service.updateObject(objectId, objectMock).subscribe((response) => {
      expect(response).toEqual(objectMock);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/objects/${objectId}`); // Acceder a la propiedad 'apiUrl' como privada
    expect(req.request.method).toBe('PUT');
    req.flush(objectMock);
  });

  it('should delete an object via DELETE', () => {
    const objectId = 1;

    service.deleteObject(objectId).subscribe();

    const req = httpMock.expectOne(`${service['apiUrl']}/objects/${objectId}`); // Acceder a la propiedad 'apiUrl' como privada
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
