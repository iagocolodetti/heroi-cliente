import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const base_url = 'http://localhost:8080/herois/wr/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario) {
    return this.http.post(`${base_url}/login`, JSON.stringify(usuario), {observe: 'response', headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'json'})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível logar o usuário.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }

  cadastrar(usuario: Usuario) {
    return this.http.post(base_url, JSON.stringify(usuario), {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'json'})
                    .toPromise()
                    .then((response) => response)
                    .catch((error: HttpErrorResponse) => {
                      console.error(`%cErro: Não foi possível cadastrar o usuário.\n${JSON.stringify(error.error)}`, 'color: #FF0000');
                      throw error.error;
                    });
  }
}
