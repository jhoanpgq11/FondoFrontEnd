import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = 'http://localhost:3000/api/clientes'; //TU API QUE APUNTA A CLIENTES(USUARIOS)

  constructor(private http: HttpClient) {}

  getClient(): Observable<Client> {
    return this.http.get<Client>(this.apiUrl);
  }
}
