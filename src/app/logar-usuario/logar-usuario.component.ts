import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-logar-usuario',
  templateUrl: './logar-usuario.component.html',
  styleUrls: ['./logar-usuario.component.css']
})
export class LogarUsuarioComponent implements OnInit {

  nome = null;
  senha = null;

  logarErro = null;
  logandoUsuario = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('heroisApiToken')) {
      this.router.navigateByUrl('/herois/listar');
    } else {
      let erro = localStorage.getItem('heroisApiTokenError');
      if (erro) {
        this.logarErro = `Erro: ${erro}.`;
        localStorage.removeItem('heroisApiTokenError');
      }
    }
  }

  logar() {
    this.logarErro = null;
    if (!this.nome) {
      this.logarErro = 'Erro: Preencha o campo destinado ao nome.';
    } else if (!this.senha) {
      this.logarErro = 'Erro: Preencha o campo destinado à senha.';
    } else {
      this.logandoUsuario = true;
      let usuario = new Usuario(this.nome, this.senha);
      this.usuarioService.login(usuario)
          .then((response) => {
            let token = response.headers.get('authorization');
            if (token) {
              localStorage.setItem('heroisApiToken', token);
              this.router.navigateByUrl('/herois/listar');
            }
          })
          .catch((error) => {
            this.logarErro = `Erro: ${error.message}.`;
          })
          .finally(() => this.logandoUsuario = false);
    }
  }

}
