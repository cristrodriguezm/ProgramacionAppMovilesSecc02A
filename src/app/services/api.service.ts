import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error:', error.error.message);
    } else {
      // Error del lado del servidor
      console.error(
        `Código de error: ${error.status}, ` +
        `Mensaje: ${error.error.message}`
      );
    }
    return throwError('Algo salió mal. Por favor, inténtalo nuevamente más tarde.');
  }

  private extractData(res: any) {
    const body = res;
    return body || {};
  }

  get(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError),
      map(this.extractData)
    );
  }

  post(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError),
      map(this.extractData)
    );
  }

  put(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put(url, data, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError),
      map(this.extractData)
    );
  }

  delete(endpoint: string): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete(url, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError),
      map(this.extractData)
    );
  }
}
