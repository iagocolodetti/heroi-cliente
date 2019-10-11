import { Component, OnInit } from '@angular/core';
import { Heroi } from '../model/heroi';
import { HeroiService } from '../service/heroi.service';

@Component({
  selector: 'app-listar-heroi',
  templateUrl: './listar-heroi.component.html',
  styleUrls: ['./listar-heroi.component.css']
})
export class ListarHeroiComponent implements OnInit {

  herois: Array<Heroi> = [];

  heroisErro = null;

  carregandoHerois = false;

  heroiExcluirSucesso = null;
  heroiExcluirErro = null;

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.carregarHerois();
  }

  carregarHerois() {
    this.carregandoHerois = true;
    this.heroiExcluirSucesso = null;
    this.heroiExcluirErro = null;
    this.heroiService.carregarHerois()
        .then((herois: Array<Heroi>) => {
          this.herois = herois;
          this.heroisErro = null;
        })
        .catch(() => {
          this.heroisErro = 'Erro: Não foi possível buscar os heróis.';
        })
        .finally(() => this.carregandoHerois = false);
  }

  excluirHeroi(heroi: Heroi) {
    if (confirm(`Deseja realmente excluir o herói '${heroi.nome}'?`)) {
      this.heroiExcluirSucesso = null;
      this.heroiExcluirErro = null;
      this.heroiService.excluirHeroi(heroi)
          .then(() => {
            this.herois.splice(this.herois.indexOf(heroi), 1);
            this.heroiExcluirSucesso = `Herói '${heroi.nome}' excluído com sucesso.`;
          })
          .catch((erro) => {
            this.heroiExcluirErro = `Erro: Não foi possível excluir o herói '${heroi.nome}'.`;
            console.error(erro);
          });
    }
  }
}
