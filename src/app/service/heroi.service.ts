import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroi } from '../model/heroi';

const base_url = 'http://localhost:8080/herois/wr/herois';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private http: HttpClient) { }

  carregarHerois() {
    return this.http.get(base_url, {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'json'})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: Error) => {
                      console.error(`%cErro: Não foi possível buscar os heróis.\n${error.message}`, 'color: #FF0000');
                      throw error;
                    });
  }

  adicionarHeroi(heroi: Heroi) {
    return this.http.post(base_url, JSON.stringify(heroi), {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'})
                    .toPromise()
                    .then((response) => console.log(response))
                    .catch((error: Error) => {
                      console.error(`%cErro: Não foi possível adicionar o herói '${heroi.nome}'.\n${error.message}`, 'color: #FF0000');
                      throw error;
                    });
  }

  excluirHeroi(heroi: Heroi) {
    return this.http.delete(`${base_url}/${heroi.id}`, {headers: new HttpHeaders({'Content-Type': 'text/plain'}), responseType: 'text'})
                    .toPromise()
                    .then((response) => console.log(response))
                    .catch((error: Error) => {
                      console.error(`%cErro: Não foi possível excluir o herói '${heroi.nome}'.\n${error.message}`, 'color: #FF0000');
                      throw error;
                    });
  }
}
