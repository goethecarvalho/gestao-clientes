import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcompanhamentoDetalhesRoutingModule } from './acompanhamento-detalhes-routing.module';
import { AcompanhamentoDetalhesComponent } from './acompanhamento-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AcompanhamentoDetalhesComponent],
  imports: [
    CommonModule,
    AcompanhamentoDetalhesComponent,
    SharedModule
  ]
})
export class AcompanhamentoDetalhesModule { }
