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
    if (localStorage.getItem('heroisApiAuth')) {
      this.router.navigateByUrl('/herois/listar');
    } else {
      const error = localStorage.getItem('heroisApiAuthError');
      if (error) {
        this.logarErro = `Erro: ${error}.`;
        localStorage.removeItem('heroisApiAuthError');
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
      const usuario = new Usuario(this.nome, this.senha);
      this.usuarioService.login(usuario)
          .then((response) => {
            const authorization = response.headers.get('authorization');
            if (authorization) {
              localStorage.setItem('heroisApiAuth', authorization);
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
