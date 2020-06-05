import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form.component";

const routes: Routes = [
  { path: "", redirectTo: "criar", pathMatch: "full" },
  { path: "criar", component: FormComponent },
  { path: "editar/:id", component: FormComponent },
  { path: "detalhes/:id", component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
