import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Universo } from '../model/universo';
import { Poder } from '../model/poder';
import { UniversoService } from '../service/universo.service';
import { HeroiService } from '../service/heroi.service';
import { Heroi } from '../model/heroi';

@Component({
  selector: 'app-cadastrar-heroi',
  templateUrl: './cadastrar-heroi.component.html',
  styleUrls: ['./cadastrar-heroi.component.css']
})
export class CadastrarHeroiComponent implements OnInit {

  authorization = null;

  nome = null;
  universo = null;
  poder = null;
  poderes: Array<Poder> = [];
  universos: Array<Universo>;

  buscandoUniversos = false;
  universosErro = null;

  cadastrarErro = null;
  cadastrarSucesso = null;
  cadastrandoHeroi = false;

  constructor(private universoService: UniversoService, private heroiService: HeroiService, private router: Router) { }

  ngOnInit() {
    this.authorization = localStorage.getItem('heroisApiAuth');
    if (!this.authorization) {
      this.router.navigateByUrl('/login');
    }
    this.buscarUniversos();
  }

  buscarUniversos() {
    this.buscandoUniversos = true;
    this.universoService.buscar()
        .then((universos: Array<Universo>) => {
          this.universos = universos;
          this.universosErro = null;
        })
        .catch(() => {
          this.universosErro = 'Erro: Não foi possível buscar os universos.';
        })
        .finally(() => this.buscandoUniversos = false);
  }

  adicionarPoder() {
    if (this.poder) {
      this.poderes.push({id: null, descricao: this.poder, idHeroi: null});
      this.poder = '';
    }
  }

  removerPoder(poder: Poder) {
    this.poderes.splice(this.poderes.indexOf(poder), 1);
  }

  async cadastrarHeroi() {
    this.cadastrarErro = null;
    this.cadastrarSucesso = null;
    if (!this.nome) {
      this.cadastrarErro = 'Erro: Preencha o campo destinado ao nome.';
    } else if (!this.universo) {
      this.cadastrarErro = 'Erro: Selecione um universo.';
    } else if (this.poderes.length === 0) {
      this.cadastrarErro = 'Erro: Adicione ao menos um poder.';
    } else {
      this.cadastrandoHeroi = true;
      const heroi = new Heroi(null, this.nome, null, new Universo(this.universo, null), this.poderes);
      try {
        await this.heroiService.cadastrar(this.authorization, heroi);
        this.cadastrarSucesso = `Herói '${heroi.nome}' cadastrado com sucesso.`;
        this.nome = null;
        this.universo = null;
        this.poderes = [];
      } catch (error) {
        if (error.status === 401) {
          localStorage.removeItem('heroisApiAuth');
          localStorage.setItem('heroisApiAuthError', error.message);
          this.router.navigateByUrl('/login');
        } else {
          this.cadastrarErro = `Erro: ${error.message}.`;
        }
      } finally {
        this.cadastrandoHeroi = false;
      }
    }
  }
}
