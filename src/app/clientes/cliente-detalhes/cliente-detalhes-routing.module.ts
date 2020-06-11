import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClienteDetalhesComponent } from "./cliente-detalhes.component";

const routes: Routes = [
  {
    path: "",
    component: ClienteDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteDetalhesRoutingModule {}
