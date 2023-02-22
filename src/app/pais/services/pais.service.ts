import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set(
      'fields',
      'capital,name,population,capital,flags'
    );
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarRegion(termino: string): Observable<Country[]> {
    const params = new HttpParams().set(
      'fields',
      'capital,name,population,capital,flags'
    );
    const url: string = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, { params }).pipe(tap(console.log));
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorAlpha(id: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);
  }
}
function tag(): import('rxjs').OperatorFunction<Country[], Country[]> {
  throw new Error('Function not implemented.');
}
