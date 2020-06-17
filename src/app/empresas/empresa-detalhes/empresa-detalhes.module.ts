import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaDetalhesRoutingModule } from './empresa-detalhes-routing.module';
import { EmpresaDetalhesComponent } from './empresa-detalhes.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EmpresaDetalhesComponent],
  imports: [
    CommonModule,
    EmpresaDetalhesRoutingModule,
    SharedModule
  ]
})
export class EmpresaDetalhesModule { }
