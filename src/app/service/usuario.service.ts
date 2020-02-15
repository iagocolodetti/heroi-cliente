import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../model/usuario';

const base_url = 'http://localhost:8080/herois/wr/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  async login(usuario: Usuario) {
    try {
      return await this.http.post(`${base_url}/login`, JSON.stringify(usuario), { observe: 'response', headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }

  async cadastrar(usuario: Usuario) {
    try {
      return await this.http.post(base_url, JSON.stringify(usuario), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' }).toPromise();
    } catch (error) {
      throw error.error;
    }
  }
}
