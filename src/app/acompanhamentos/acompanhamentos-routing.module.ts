import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanhamentosComponent } from "./acompanhamentos.component";

const routes: Routes = [
  { path: "", component: AcompanhamentosComponent },
  { path: "acompanhamento-form", loadChildren:() => import('./acompanhamento-form/acompanhamento-form.module').then(m => m.AcompanhamentoFormModule) },
  { path: "acompanhamento-detalhes/:id", loadChildren:() => import('./acompanhamento-detalhes/acompanhamento-detalhes.module').then(m => m.AcompanhamentoDetalhesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompanhamentosRoutingModule {}
