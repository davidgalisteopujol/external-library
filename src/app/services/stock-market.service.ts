import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StockMarket } from '../interfaces/stock-market.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockMarketService {

  private baseUrl = 'https://financialmodelingprep.com/api/v3/historical-price-full/AAPL?from=2023-07-03&to=2023-07-21&apikey=7dc28a3ccf63727f5d522bb9c3101be8';

  constructor(private http: HttpClient) { }

  getMarketData(): Observable<StockMarket[]> {
    return this.http.get<StockMarket[]>(this.baseUrl)
  }
}
