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
import { LogarUsuarioComponent } from './logar-usuario/logar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { DeslogarUsuarioComponent } from './deslogar-usuario/deslogar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarHeroiComponent,
    CadastrarHeroiComponent,
    LogarUsuarioComponent,
    CadastrarUsuarioComponent,
    DeslogarUsuarioComponent
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
