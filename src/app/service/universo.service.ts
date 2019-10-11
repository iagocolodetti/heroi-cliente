import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = 'http://localhost:8080/herois/wr/universos';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {

  constructor(private http: HttpClient) { }

  buscarUniversos() {
    return this.http.get(base_url, {headers: new HttpHeaders({'Content-Type': 'application/json'})})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: Error) => {
                      console.error(`%cErro: Não foi possível buscar os universos.\n${error.message}`, 'color: #FF0000');
                      throw error;
                    });
  }
}
