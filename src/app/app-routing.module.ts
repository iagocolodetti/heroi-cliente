import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogarUsuarioComponent } from './logar-usuario/logar-usuario.component';
import { DeslogarUsuarioComponent } from './deslogar-usuario/deslogar-usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { ListarHeroiComponent } from './listar-heroi/listar-heroi.component';
import { CadastrarHeroiComponent } from './cadastrar-heroi/cadastrar-heroi.component';

const routes: Routes = [
  {path: 'login', component: LogarUsuarioComponent},
  {path: 'logout', component: DeslogarUsuarioComponent},
  {path: 'cadastrar', component: CadastrarUsuarioComponent},
  {path: 'herois/listar', component: ListarHeroiComponent},
  {path: 'herois/cadastrar', component: CadastrarHeroiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
