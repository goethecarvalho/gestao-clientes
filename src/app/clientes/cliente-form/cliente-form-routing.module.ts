import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ClienteFormComponent } from './cliente-form.component';

const routes: Routes = [
  { path: "", redirectTo: "criar", pathMatch: "full" },
  { path: "criar", component: ClienteFormComponent },
  { path: "editar/:id", component: ClienteFormComponent },
  { path: "detalhes/:id", component: ClienteFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteFormRoutingModule {}
