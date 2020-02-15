import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = 'http://localhost:8080/herois/wr/universos';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {

  constructor(private http: HttpClient) { }

  async buscar() {
    try {
      return await this.http.get(base_url, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }
}
