import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroi } from '../model/heroi';

const base_url = 'http://localhost:8080/herois/wr/herois';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private http: HttpClient) { }

  async carregar(authorization: string) {
    try {
      return await this.http.get(base_url, { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': authorization }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }

  async cadastrar(authorization: string, heroi: Heroi) {
    try {
      return await this.http.post(base_url, JSON.stringify(heroi), { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': authorization }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }

  async excluir(authorization: string, heroi: Heroi) {
    try {
      return await this.http.delete(`${base_url}/${heroi.id}`, { headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Authorization': authorization }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }
}
