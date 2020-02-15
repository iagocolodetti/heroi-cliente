import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroi } from '../model/heroi';
import { HeroiService } from '../service/heroi.service';

@Component({
  selector: 'app-listar-heroi',
  templateUrl: './listar-heroi.component.html',
  styleUrls: ['./listar-heroi.component.css']
})
export class ListarHeroiComponent implements OnInit {

  authorization = null;

  herois: Array<Heroi> = [];

  heroisErro = null;

  carregandoHerois = false;

  heroiExcluirSucesso = null;
  heroiExcluirErro = null;

  constructor(private heroiService: HeroiService, private router: Router) { }

  ngOnInit() {
    this.authorization = localStorage.getItem('heroisApiAuth');
    if (this.authorization) {
      this.carregarHerois();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  async carregarHerois() {
    this.carregandoHerois = true;
    this.heroiExcluirSucesso = null;
    this.heroiExcluirErro = null;
    try {
      const response = await this.heroiService.carregar(this.authorization);
      this.herois = <Heroi[]> response;
      this.heroisErro = null;
    } catch (error) {
      if (error.status === 401) {
        localStorage.removeItem('heroisApiAuth');
        localStorage.setItem('heroisApiAuthError', error.message);
        this.router.navigateByUrl('/login');
      } else {
        this.heroisErro = `Erro: ${error.message}.`;
      }
    } finally {
      this.carregandoHerois = false;
    }
  }

  async excluirHeroi(heroi: Heroi) {
    if (confirm(`Deseja realmente excluir o herói '${heroi.nome}'?`)) {
      this.heroiExcluirSucesso = null;
      this.heroiExcluirErro = null;
      try {
        await this.heroiService.excluir(this.authorization, heroi);
        this.herois.splice(this.herois.indexOf(heroi), 1);
        this.heroiExcluirSucesso = `Herói '${heroi.nome}' excluído com sucesso.`;
      } catch (error) {
        if (error.status === 401) {
          localStorage.removeItem('heroisApiAuth');
          localStorage.setItem('heroisApiAuthError', error.message);
          this.router.navigateByUrl('/login');
        } else {
          this.heroiExcluirErro = `Erro: ${error.message}.`;
        }
      }
    }
  }
}
