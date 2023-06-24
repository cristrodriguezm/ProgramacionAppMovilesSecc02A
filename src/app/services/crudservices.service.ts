import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getObjects(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/objects`);
  }

  getObject(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/objects/${id}`);
  }

  createObject(object: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/objects`, object);
  }

  updateObject(id: number, object: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/objects/${id}`, object);
  }

  deleteObject(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/objects/${id}`);
  }
}
