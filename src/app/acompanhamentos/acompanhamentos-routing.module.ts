import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompanhamentosComponent } from './acompanhamentos.component';

const routes: Routes = [
  { path: "", component: AcompanhamentosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompanhamentosRoutingModule { }
