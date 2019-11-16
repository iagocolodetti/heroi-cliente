import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const base_url = 'http://localhost:8080/herois/wr/universos';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {

  constructor(private http: HttpClient) { }

  buscar() {
    return this.http.get(base_url, {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'json'})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível buscar os universos.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }
}
