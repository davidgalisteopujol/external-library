import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl = 'https://restcountries.com/v3.1/all'

  constructor(private http: HttpClient) { }

  getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(this.baseUrl)
  }
}
