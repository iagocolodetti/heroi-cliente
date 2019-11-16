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

  token = null;

  herois: Array<Heroi> = [];

  heroisErro = null;

  carregandoHerois = false;

  heroiExcluirSucesso = null;
  heroiExcluirErro = null;

  constructor(private heroiService: HeroiService, private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('heroisApiToken');
    if (this.token) {
      this.carregarHerois();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  carregarHerois() {
    this.carregandoHerois = true;
    this.heroiExcluirSucesso = null;
    this.heroiExcluirErro = null;
    this.heroiService.carregar(this.token)
        .then((herois: Array<Heroi>) => {
          this.herois = herois;
          this.heroisErro = null;
        })
        .catch((error) => {
          if (error.status === "401") {
            localStorage.removeItem('heroisApiToken');
            localStorage.setItem('heroisApiTokenError', error.message);
            this.router.navigateByUrl('/login');
          } else {
            this.heroisErro = `Erro: ${error.message}.`;
          }
        })
        .finally(() => this.carregandoHerois = false);
  }

  excluirHeroi(heroi: Heroi) {
    if (confirm(`Deseja realmente excluir o herói '${heroi.nome}'?`)) {
      this.heroiExcluirSucesso = null;
      this.heroiExcluirErro = null;
      this.heroiService.excluir(this.token, heroi)
          .then(() => {
            this.herois.splice(this.herois.indexOf(heroi), 1);
            this.heroiExcluirSucesso = `Herói '${heroi.nome}' excluído com sucesso.`;
          })
          .catch((error) => {
            if (error.status === "401") {
              localStorage.removeItem('heroisApiToken');
              localStorage.setItem('heroisApiTokenError', error.message);
              this.router.navigateByUrl('/login');
            } else {
              this.heroiExcluirErro = `Erro: ${error.message}.`;
            }
          });
    }
  }
}
