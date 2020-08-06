import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoDetalhesComponent } from "./produto-detalhes.component";

const routes: Routes = [
  {
    path: "",
    component: ProdutoDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoDetalhesRoutingModule {}
