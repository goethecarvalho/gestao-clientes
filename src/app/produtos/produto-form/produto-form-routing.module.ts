import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProdutoFormComponent } from './produto-form.component';

const routes: Routes = [
  { path: "", redirectTo: "criar", pathMatch: "full" },
  { path: "criar", component: ProdutoFormComponent },
  { path: "editar/:id", component: ProdutoFormComponent },
  { path: "detalhes/:id", component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoFormRoutingModule {}
