import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutosComponent } from "./produtos.component";
import { AcompanhamentosComponent } from '../acompanhamentos/acompanhamentos.component';

const routes: Routes = [
  { path: "", component: ProdutosComponent },
  { path: "produto-form", loadChildren:() => import('./produto-form/produto-form.module').then(m => m.ProdutoFormModule) },
  { path: "produto-detalhes/:id", loadChildren:() => import('./produto-detalhes/produto-detalhes.module').then(m => m.ProdutoDetalhesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule {}
