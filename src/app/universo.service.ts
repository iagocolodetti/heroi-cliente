import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversoService {

  constructor(private http: HttpClient) { }

  buscarUniversos() {
    return this.http.get('http://localhost:8080/Heroi/wr/universo', {headers: new HttpHeaders({'Content-Type': 'application/json'})})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: Error) => {
                      console.log(`%cErro: Não foi possível buscar os universos.\n${error.message}`, 'color: #FF0000');
                      throw error;
                    });
  }
}
