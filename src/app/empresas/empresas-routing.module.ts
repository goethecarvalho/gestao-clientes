import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresasComponent } from "./empresas.component";
import { AcompanhamentosComponent } from '../acompanhamentos/acompanhamentos.component';

const routes: Routes = [
  { path: "", component: EmpresasComponent },
  { path: "empresa-form", loadChildren:() => import('./empresa-form/empresa-form.module').then(m => m.EmpresaFormModule) },
  { path: "empresa-detalhes/:id", loadChildren:() => import('./empresa-detalhes/empresa-detalhes.module').then(m => m.EmpresaDetalhesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule {}
