import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClientesComponent } from "./clientes.component";

const routes: Routes = [
  { path: "", component: ClientesComponent },
  { path: "gestao", loadChildren:"./form/form.module#FormModule" },
  { path: "detalhes/:id", loadChildren:"./cliente-detalhes/cliente-detalhes.module#ClienteDetalhesModule" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule {}
