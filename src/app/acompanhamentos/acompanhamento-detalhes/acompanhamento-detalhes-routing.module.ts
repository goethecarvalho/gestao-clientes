import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanhamentoDetalhesComponent } from "./acompanhamento-detalhes.component";

const routes: Routes = [
  {
    path: "",
    component: AcompanhamentoDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompanhamentoDetalhesRoutingModule {}
