import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarHeroiComponent } from './listar-heroi/listar-heroi.component';
import { CadastrarHeroiComponent } from './cadastrar-heroi/cadastrar-heroi.component';


const routes: Routes = [
  {path: '', component: ListarHeroiComponent},
  {path: 'listar', component: ListarHeroiComponent},
  {path: 'cadastrar', component: CadastrarHeroiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
