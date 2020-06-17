import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresaDetalhesComponent } from "./empresa-detalhes.component";

const routes: Routes = [
  {
    path: "",
    component: EmpresaDetalhesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaDetalhesRoutingModule {}
