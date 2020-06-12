import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanhamentosComponent } from "./acompanhamentos.component";

const routes: Routes = [
  { path: "", component: AcompanhamentosComponent },
  { path: "acompanhamento-form", loadChildren:"./acompanhamento-form/acompanhamento-form.module#AcompanhamentoFormModule" },
  { path: "acompanhamento-detalhes/:id", loadChildren:"./acompanhamento-detalhes/acompanhamento-detalhes.module#AcompanhamentoDetalhesModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompanhamentosRoutingModule {}
