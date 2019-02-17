import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContatosComponent } from "./contatos.component";

const routes: Routes = [
  { path: "", component: ContatosComponent },
  { path: "gestao", loadChildren:"./form/form.module#FormModule" },
  { path: "detalhes/:id", loadChildren:"./detalhes/detalhes.module#DetalhesModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatosRoutingModule {}
