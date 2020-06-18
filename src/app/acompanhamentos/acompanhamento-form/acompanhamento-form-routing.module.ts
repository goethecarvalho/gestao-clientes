import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcompanhamentoFormComponent } from './acompanhamento-form.component';
import { AcompanhamentoDetalhesModule } from '../acompanhamento-detalhes/acompanhamento-detalhes.module';

const routes: Routes = [
  { path: "", redirectTo: "criar", pathMatch: "full" },
  { path: "criar", component: AcompanhamentoFormComponent },
  { path: "editar/:id", component: AcompanhamentoFormComponent },
  { path: "acompanhamento-detalhes/:id", component: AcompanhamentoDetalhesModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcompanhamentoFormRoutingModule {}
