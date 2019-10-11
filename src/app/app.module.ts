import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarHeroiComponent } from './listar-heroi/listar-heroi.component';
import { CadastrarHeroiComponent } from './cadastrar-heroi/cadastrar-heroi.component';
import { HeroiService } from './service/heroi.service';
import { UniversoService } from './service/universo.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarHeroiComponent,
    CadastrarHeroiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    HeroiService,
    UniversoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
