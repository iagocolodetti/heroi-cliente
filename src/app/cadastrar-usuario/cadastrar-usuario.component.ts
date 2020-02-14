import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../model/usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  nome = null;
  senha = null;
  rsenha = null;

  cadastrarErro = null;
  cadastrarSucesso = null;
  cadastrandoUsuario = false;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('heroisApiToken')) {
      this.router.navigateByUrl('/herois/listar');
    }
  }

  cadastrar() {
    this.cadastrarErro = null;
    this.cadastrarSucesso = null;
    if (!this.nome) {
      this.cadastrarErro = 'Erro: Preencha o campo destinado ao nome.';
    } else if (!this.senha) {
      this.cadastrarErro = 'Erro: Preencha o campo destinado à senha.';
    } else if (!this.rsenha) {
      this.cadastrarErro = 'Erro: Repita a senha.';
    } else if (this.senha !== this.rsenha) {
      this.cadastrarErro = 'Erro: Senhas diferentes.';
    } else {
      this.cadastrandoUsuario = true;
      const usuario = new Usuario(this.nome, this.senha);
      this.usuarioService.cadastrar(usuario)
          .then(() => {
            this.cadastrarSucesso = `Usuário '${usuario.nome}' cadastrado com sucesso.`;
            this.nome = this.senha = this.rsenha = null;
          })
          .catch((error) => {
            this.cadastrarErro = `Erro: ${error.message}.`;
          })
          .finally(() => this.cadastrandoUsuario = false);
    }
  }

}
