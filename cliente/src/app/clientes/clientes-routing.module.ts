import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemClienteComponent } from '../listagem-cliente/listagem-cliente.component';

const routes: Routes = [
  { path: '', component: ListagemClienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
