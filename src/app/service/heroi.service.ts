import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Heroi } from '../model/heroi';

const base_url = 'http://localhost:8080/herois/wr/herois';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private http: HttpClient) { }

  carregar(token: string) {
    return this.http.get(base_url, {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token}), responseType: 'json'})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível buscar os heróis.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }

  adicionar(token: string, heroi: Heroi) {
    return this.http.post(base_url, JSON.stringify(heroi), {headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization': token}), responseType: 'json'})
                    .toPromise()
                    .then((response) => console.log(response))
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível adicionar o herói '${heroi.nome}'.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }

  excluir(token: string, heroi: Heroi) {
    return this.http.delete(`${base_url}/${heroi.id}`, {headers: new HttpHeaders({'Content-Type': 'text/plain', 'Authorization': token}), responseType: 'json'})
                    .toPromise()
                    .then((response) => console.log(response))
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível excluir o herói '${heroi.nome}'.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }
}
