import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from 'src/app/shared/shared.module';
import { AcompanhamentoFormRoutingModule } from './acompanhamento-form-routing.module';
import { AcompanhamentoFormComponent } from './acompanhamento-form.component';

@NgModule({
  declarations: [AcompanhamentoFormComponent],
  imports: [CommonModule, AcompanhamentoFormRoutingModule, SharedModule]
})
export class AcompanhamentoFormModule {}