import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fund } from '../models/funds';
import { SubscribedFund } from '../models/subscribed-fund';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private apiUrl = 'http://localhost:3000/api/fondos'; //API QUE APUNTA A TODO LO RELACIONADO CON FONDOS

  constructor(private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.apiUrl);
  }

  getSubscribedFunds(): Observable<SubscribedFund[]> {
    return this.http.get<SubscribedFund[]>(`${this.apiUrl}/subscribed`);
  }

  subscribeToFund(fundId: number, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/subscribe`, { fundId, amount });
  }

  unsubscribeFromFund(fundId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/unsubscribe`, { fundId });
  }
}
