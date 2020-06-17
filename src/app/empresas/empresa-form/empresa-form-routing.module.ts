import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmpresaFormComponent } from './empresa-form.component';

const routes: Routes = [
  { path: "", redirectTo: "criar", pathMatch: "full" },
  { path: "criar", component: EmpresaFormComponent },
  { path: "editar/:id", component: EmpresaFormComponent },
  { path: "detalhes/:id", component: EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaFormRoutingModule {}
